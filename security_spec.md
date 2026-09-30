# Security Specification: National Triskelion Legacy & Impact Platform

## 1. Architectural Overview & Data Invariants
- **Platform Scope**: Official National Triskelion platform and regional councils across the Philippines and international chapters.
- **Core Entities**:
  1. `blood_donations/{donationId}`: Public community & fraternal blood donation drive submissions for humanitarian cause campaigns (Dugong Alay, Dugtong Buhay).
  2. `leadership_users/{userId}`: Verified leadership records for National Council Officers, Regional Directors, and Chapter Heads.
  3. `admins/{userId}`: Hardened administrative whitelist.

### Core Data Invariants:
1. **Donor PII Protection**: Blood donation records contain sensitive contact information (phone number, optional medical notes). Read access is strictly restricted to authenticated Fraternity Leadership, Admins, or the originating donor. Public visitors cannot scrape donor contact lists.
2. **Immutability of Submitted Records**: A donor pledge cannot be modified by unauthenticated users or standard users after creation. Only admins can update the status (`pending` -> `verified` / `scheduled` / `completed`) or official notes.
3. **No Shadow Fields**: Strict key whitelisting prohibits attackers from injecting unvetted fields (e.g. `isAdmin: true`, `verified: true`, `role: superuser`).
4. **Temporal Integrity**: `createdAt` must strictly match `request.time` generated on the server. Client-fabricated timestamps are rejected.
5. **ID Poisoning Protection**: All path IDs must conform to `^[a-zA-Z0-9_\-]+$` and have length <= 128 bytes.
6. **Admin Verification**: Administrative privileges are granted exclusively to verified email `hello@weforgeweb.com` (with `email_verified == true`) or an explicit document in the `/admins` collection.

---

## 2. The "Dirty Dozen" Threat Payloads

| ID | Attack Vector | Target Path | Malicious Payload Characteristic | Expected Result |
|----|---------------|-------------|----------------------------------|-----------------|
| D1 | Unauthorized Read of Donor PII | `GET /blood_donations/{id}` | Anonymous unauthenticated client attempting to scrape phone numbers and donor names | **PERMISSION_DENIED** |
| D2 | Blanket List Scraping | `LIST /blood_donations` | Anonymous client running queries across all donor documents | **PERMISSION_DENIED** |
| D3 | Ghost Field / Shadow Update | `CREATE /blood_donations/{id}` | Extra malicious field: `{"donorName":"Juan","isAdmin":true,"status":"pending",...}` | **PERMISSION_DENIED** |
| D4 | Invalid Blood Type Poisoning | `CREATE /blood_donations/{id}` | Invalid blood type: `{"bloodType":"X_NEGATIVE",...}` | **PERMISSION_DENIED** |
| D5 | Short Contact Number Injection | `CREATE /blood_donations/{id}` | Contact number < 7 chars: `{"contactNumber":"123",...}` | **PERMISSION_DENIED** |
| D6 | Huge String / Denial-of-Wallet | `CREATE /blood_donations/{id}` | City field containing a 50KB junk string exceeding 80 bytes | **PERMISSION_DENIED** |
| D7 | Premature Self-Approval | `CREATE /blood_donations/{id}` | Donor submitting with `status: "verified"` bypassing triage | **PERMISSION_DENIED** |
| D8 | Future Timestamp Spoofing | `CREATE /blood_donations/{id}` | Client setting `createdAt` to a future date instead of `request.time` | **PERMISSION_DENIED** |
| D9 | Non-Admin Status Tampering | `UPDATE /blood_donations/{id}` | Regular user attempting to mutate `status` to `completed` | **PERMISSION_DENIED** |
| D10| Path ID Traversal / Poisoning | `CREATE /blood_donations/../../bad` | Invalid characters or oversized document ID | **PERMISSION_DENIED** |
| D11| Self-Escalation to Leadership | `CREATE /admins/{uid}` | Non-admin user creating an admin authorization entry for themselves | **PERMISSION_DENIED** |
| D12| Unverified Email Spoofing | `UPDATE /blood_donations/{id}` | User with `email: "hello@weforgeweb.com"` but `email_verified: false` | **PERMISSION_DENIED** |

---

## 3. Defense Implementation Mapping
- `firestore.rules` enforces every invariant mathematically through:
  - Default deny-all catch-all rule: `match /{document=**} { allow read, write: if false; }`
  - `isValidId(id)` checking alphanumeric format and size <= 128.
  - `isValidBloodDonation(data)` strictly checking types, string boundaries, enum membership, required keys, and allowed keys.
  - Context-aware validation preventing `request.resource` checks on read/delete operations.
