# A.R.V.I.S.Q.-Skills - Skill Card Template

Every skill in this repository follows this structure:

```
skills/
├── owasp-top-10/
│   └── A01-broken-access-control/
│       ├── SKILL.md              # Skill card with metadata
│       ├── README.md             # Comprehensive guide
│       ├── exploit.sh            # (Optional) Exploitation script
│       ├── remediation.md        # Fix guidance
│       └── examples/             # Code examples
│           ├── vulnerable.py
│           └── secure.py
├── owasp-llm-top-10/
│   └── LLM01-prompt-injection/
│       ├── SKILL.md
│       ├── README.md
│       ├── test-prompts.txt
│       └── examples/
└── api-security/
    └── rate-limiting/
        ├── SKILL.md
        ├── README.md
        ├── test-rate-limit.sh
        └── examples/
```

---

## SKILL.md Format

The `SKILL.md` is the skill card - a metadata file in YAML frontmatter + Markdown:

```markdown
---
name: owasp-a01-broken-access-control
description: >-
  Detect and remediate Broken Access Control vulnerabilities (OWASP A01:2021).
  Covers horizontal/vertical privilege escalation, IDOR, missing function-level
  access control. Returns detailed findings with exploit payloads and remediation.
category: owasp-top-10
severity: critical
cwe:
  - CWE-284  # Improper Access Control
  - CWE-862  # Missing Authorization
owasp-mapping: A01:2021-Broken-Access-Control
mitre-atlas: AML.T0001
tools:
  - access-control-scanner
  - idor-detector
related-skills:
  - owasp-a04-insecure-design
  - api-security/authentication
tags:
  - authorization
  - idor
  - privilege-escalation
difficulty: intermediate
estimated-time: 30-45 minutes
---

# OWASP A01:2021 - Broken Access Control

**Brief description of the vulnerability class**

## Overview

- **Severity**: 🔴 Critical
- **Prevalence**: 94% of applications
- **Exploitability**: Easy
- **Impact**: Full system compromise

## What Is It?

[Explanation of the vulnerability]

## How It Works

[Technical details]

## Common Attack Vectors

1. **Horizontal Privilege Escalation**
2. **Vertical Privilege Escalation**
3. **IDOR (Insecure Direct Object References)**

## Real-World Examples

...

## Detection Methods

...

## Exploitation

...

## Remediation

...

## Tools

- Tool 1 (link to /tools/)
- Tool 2

## References

- [OWASP A01](https://owasp.org/...)
- [CWE-284](https://cwe.mitre.org/...)
```

---

## README.md Format

The `README.md` is the comprehensive educational content:

```markdown
# Broken Access Control - Deep Dive

> Part of the A.R.V.I.S.Q.-Skills OWASP Top 10 catalog

## Table of Contents

1. [Understanding Access Control](#understanding-access-control)
2. [Vulnerability Types](#vulnerability-types)
3. [Exploitation Techniques](#exploitation-techniques)
4. [Detection Methods](#detection-methods)
5. [Remediation Strategies](#remediation-strategies)
6. [Code Examples](#code-examples)
7. [Testing Tools](#testing-tools)
8. [Real-World Case Studies](#real-world-case-studies)

---

## Understanding Access Control

[Comprehensive explanation]

## Vulnerability Types

### 1. Horizontal Privilege Escalation

**Description**: ...

**Example Scenario**: ...

**Vulnerable Code**:
```python
# See examples/vulnerable.py
@app.route('/user/<user_id>/profile')
def get_profile(user_id):
    return User.query.get(user_id)  # No auth check!
```

**Attack**:
```bash
curl https://api.example.com/user/123/profile
# Attacker accesses any user's profile by changing ID
```

[... more detailed content ...]

## Testing This Vulnerability

### Manual Testing

1. Identify endpoints with user-specific data
2. Note your authorized user ID
3. Try accessing another user's ID
4. Check if the application allows it

### Automated Testing

```bash
# Run the included test script
./exploit.sh -t https://target.com -u 123 -o 456
```

### Using A.R.V.I.S.Q. Tools

```bash
# Install the IDOR detector
npm install -g @arvisq/idor-detector

# Scan an API
arvisq-idor-detector --url https://api.example.com --auth-token YOUR_TOKEN
```

## Secure Implementation

See [remediation.md](remediation.md) and [examples/secure.py](examples/secure.py)

## References

- [OWASP ASVS](...)
- [CWE-284](...)
- [NIST Guidelines](...)

---

**Next Skill**: [A02: Cryptographic Failures](../A02-cryptographic-failures/)
```

---

## Optional Files

### exploit.sh (Testing Script)

```bash
#!/bin/bash
# OWASP A01 - Broken Access Control Tester
# Part of A.R.V.I.S.Q.-Skills

set -e

TARGET_URL=""
USER_ID=""
TARGET_ID=""

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--target) TARGET_URL="$2"; shift 2 ;;
        -u|--user) USER_ID="$2"; shift 2 ;;
        -o|--other) TARGET_ID="$2"; shift 2 ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
done

# Validate
if [[ -z "$TARGET_URL" || -z "$USER_ID" || -z "$TARGET_ID" ]]; then
    echo "Usage: $0 -t <target-url> -u <your-user-id> -o <other-user-id>"
    exit 1
fi

echo "[*] Testing Broken Access Control on $TARGET_URL"
echo "[*] Your ID: $USER_ID"
echo "[*] Target ID: $TARGET_ID"

# Test 1: Direct object reference
echo "[+] Test 1: IDOR attack"
curl -s "${TARGET_URL}/user/${TARGET_ID}/profile" -H "Authorization: Bearer ${TOKEN}" | jq

# Test 2: Parameter manipulation
echo "[+] Test 2: Parameter manipulation"
curl -s "${TARGET_URL}/api/user/profile?user_id=${TARGET_ID}" -H "Authorization: Bearer ${TOKEN}" | jq

echo "[✓] Tests complete. Review output for unauthorized access."
```

### remediation.md (Fix Guide)

```markdown
# Remediating Broken Access Control

## Quick Fixes

1. ✅ Implement authorization checks at every endpoint
2. ✅ Use deny-by-default approach
3. ✅ Validate user permissions server-side
4. ✅ Use random, unpredictable identifiers

## Secure Code Example

```python
# examples/secure.py
from flask import Flask, g, abort
from functools import wraps

def require_owner(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_id = kwargs.get('user_id')
        if g.current_user.id != user_id:
            abort(403)  # Forbidden
        return f(*args, **kwargs)
    return decorated_function

@app.route('/user/<int:user_id>/profile')
@login_required
@require_owner
def get_profile(user_id):
    return User.query.get(user_id)
```

## Framework-Specific Guidance

### Django

[...]

### Express.js

[...]

### Spring Boot

[...]
```

---

## Directory Structure Per Skill

```
A01-broken-access-control/
├── SKILL.md                    # Skill card (metadata + brief)
├── README.md                   # Comprehensive guide
├── remediation.md              # How to fix
├── exploit.sh                  # Testing script (optional)
├── examples/
│   ├── vulnerable.py          # Vulnerable code example
│   ├── vulnerable.js
│   ├── vulnerable.java
│   ├── secure.py              # Fixed version
│   ├── secure.js
│   └── secure.java
├── test-cases/
│   ├── test-horizontal.http   # HTTP request examples
│   ├── test-vertical.http
│   └── test-idor.http
└── assets/
    ├── diagram-attack-flow.svg
    └── screenshot-exploit.png
```

---

## Skill Card Fields

### Required Fields

```yaml
name: string                    # Kebab-case identifier
description: string             # Multi-line description
category: string                # owasp-top-10 | owasp-llm-top-10 | api-security
severity: critical|high|medium|low
```

### Optional Fields

```yaml
cwe: array                      # CWE identifiers
owasp-mapping: string           # e.g., A01:2021-Broken-Access-Control
mitre-atlas: string             # MITRE ATLAS technique
tools: array                    # Related A.R.V.I.S.Q. tools
related-skills: array           # Other skills to study
tags: array                     # Searchable tags
difficulty: beginner|intermediate|advanced
estimated-time: string          # Time to learn/test
language-specific: array        # If only applies to certain languages
frameworks: array               # Related frameworks (Django, Express, etc.)
```

---

## Writing Guidelines

### SKILL.md (Skill Card)

- **Length**: 200-500 words
- **Purpose**: Quick reference, metadata
- **Audience**: Both humans and automation
- **Format**: YAML frontmatter + brief Markdown

### README.md (Full Guide)

- **Length**: 2,000-5,000 words
- **Purpose**: Comprehensive learning resource
- **Audience**: Security practitioners, developers
- **Format**: Structured Markdown with code examples
- **Must Include**:
  - Explanation of vulnerability
  - How it works technically
  - Attack vectors with examples
  - Detection methods (manual + automated)
  - Remediation strategies
  - Code examples (vulnerable + secure)
  - References to standards/CWEs

### exploit.sh (Test Script)

- **Purpose**: Automated testing for the vulnerability
- **Requirements**:
  - Requires explicit consent to run
  - Clear output explaining what was tested
  - Safe defaults (no destructive actions)
  - Usage instructions in header
  - Works with common tools (curl, jq, etc.)

---

## Quality Checklist

Before publishing a skill:

- [ ] SKILL.md has complete metadata
- [ ] README.md is comprehensive (2000+ words)
- [ ] At least 2 code examples (vulnerable + secure)
- [ ] Multiple language examples (Python, JS, Java)
- [ ] Test script works and is safe
- [ ] Remediation guidance is actionable
- [ ] References are accurate and current
- [ ] All code has been tested
- [ ] Screenshots/diagrams are clear
- [ ] No sensitive data in examples
- [ ] Follows A.R.V.I.S.Q. style guide

---

## Example: Complete Skill

See [`skills/owasp-top-10/A01-broken-access-control/`](owasp-top-10/A01-broken-access-control/) for a complete reference implementation.

---

## Contributing Skills

1. Fork the repository
2. Create skill directory: `skills/<category>/<skill-name>/`
3. Copy `SKILL_TEMPLATE.md` as `SKILL.md`
4. Fill out all required fields
5. Write comprehensive README.md
6. Add code examples
7. Add test script (if applicable)
8. Submit pull request

See [CONTRIBUTING.md](../docs/contributing.html) for detailed guidelines.

---

**Template Version**: 1.0  
**Last Updated**: 2026-10-22  
**Maintained by**: A.R.V.I.S.Q.-Skills Team
