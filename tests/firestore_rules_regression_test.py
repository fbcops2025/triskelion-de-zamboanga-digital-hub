"""Local static regression checks for Firestore privilege boundaries.

This is NOT an emulator or deployed-rules test. It checks the checked-in rules
text only. Existing leadership_users records still require a human audit before
being trusted as an authorization roster, and these local rules are not
production-deployed by this test.
"""
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
RULES = ROOT / "firestore.rules"


def _leadership_block() -> str:
    rules = RULES.read_text(encoding="utf-8")
    match = re.search(
        r"match /leadership_users/\{userId\} \{(?P<body>.*?)\n    \}",
        rules,
        re.DOTALL,
    )
    assert match, "leadership_users authorization block must exist"
    return match.group("body")


def test_leadership_roster_is_admin_managed_only() -> None:
    block = _leadership_block()
    assert "allow create, update: if isAdmin() && isValidId(userId);" in block
    assert "request.auth.uid == userId" not in block
    assert "allow create, update: if isSignedIn()" not in block


def test_verifier_lookup_remains_roster_based_without_client_grant() -> None:
    rules = RULES.read_text(encoding="utf-8")
    assert "exists(/databases/$(database)/documents/leadership_users/$(request.auth.uid))" in rules
    assert "allow write: if isAdmin() && isValidId(userId);" in rules


if __name__ == "__main__":
    tests = [
        test_leadership_roster_is_admin_managed_only,
        test_verifier_lookup_remains_roster_based_without_client_grant,
    ]
    for test in tests:
        test()
        print(f"PASS {test.__name__}")
    print("Static Firestore rules assertions passed (not emulator coverage).")
