---
name: owasp-a01-broken-access-control
description: >-
  Detect and remediate Broken Access Control vulnerabilities (OWASP A01:2021).
  Covers horizontal/vertical privilege escalation, IDOR, missing function-level
  access control, insecure direct object references, and force browsing. Returns
  detailed findings with exploit payloads and remediation guidance. Use when
  asked to "check access control", "test for IDOR", "verify authorization", or
  "scan for privilege escalation".
category: owasp-top-10
severity: critical
cwe:
  - CWE-284  # Improper Access Control
  - CWE-285  # Improper Authorization
  - CWE-639  # Authorization Bypass Through User-Controlled Key
  - CWE-862  # Missing Authorization
owasp-mapping: A01:2021-Broken-Access-Control
mitre-atlas: AML.T0001
tools:
  - access-control-scanner
  - idor-detector
  - privilege-escalation-tester
related-skills:
  - owasp-a04-insecure-design
  - owasp-a07-identification-authentication-failures
  - api-security/authentication
  - api-security/authorization
tags:
  - authorization
  - idor
  - privilege-escalation
  - access-control
  - horizontal-escalation
  - vertical-escalation
difficulty: intermediate
estimated-time: 45-60 minutes
frameworks:
  - Django
  - Flask
  - Express.js
  - Spring Boot
  - ASP.NET
---

# OWASP A01:2021 - Broken Access Control

**Broken Access Control** moves up from the fifth position to the category with the most serious web application security risk. 94% of applications were tested for some form of broken access control with an average incidence rate of 3.81%.

## 📊 Overview

- **Severity**: 🔴 Critical
- **Prevalence**: 94% of applications tested
- **Average Incidence Rate**: 3.81%
- **Exploitability**: ⚠️ Easy
- **Impact**: Unauthorized information disclosure, modification, or destruction of all data
- **Common Weakness Enumeration (CWE)**: 34 CWEs mapped

## 🎯 What Is It?

Access control enforces policy such that users cannot act outside their intended permissions. Failures typically lead to:

- Unauthorized information disclosure
- Modification or destruction of data  
- Performing business functions outside user's limits
- Acting as another user (privilege escalation)

## ⚔️ Common Attack Vectors

1. **Horizontal Privilege Escalation** - Accessing another user's resources at the same permission level
2. **Vertical Privilege Escalation** - Accessing admin/privileged functions as a regular user
3. **IDOR** (Insecure Direct Object References) - Manipulating object identifiers to access unauthorized data
4. **Missing Function Level Access Control** - APIs with missing authorization checks
5. **Force Browsing** - Accessing pages/endpoints without proper authorization

## 🔍 Detection Methods

### Manual Testing
- Manipulate URL parameters (user IDs, object IDs)
- Try accessing admin endpoints as regular user
- Test API endpoints without authentication tokens
- Modify request parameters to access other users' data

### Automated Tools
- A.R.V.I.S.Q. Access Control Scanner
- OWASP ZAP
- Burp Suite Pro (Autorize extension)
- Custom scripts with the IDOR detector

## 🛡️ Remediation

1. ✅ Deny by default except for public resources
2. ✅ Implement access control mechanisms once and re-use throughout
3. ✅ Model access controls should enforce record ownership
4. ✅ Disable web server directory listing
5. ✅ Log access control failures, alert admins when appropriate
6. ✅ Rate limit API access to minimize harm from automated attacks
7. ✅ Invalidate JWT tokens on logout server-side

## 📚 Resources

- **Full Guide**: [README.md](README.md)
- **Remediation**: [remediation.md](remediation.md)
- **Test Script**: [exploit.sh](exploit.sh)
- **Code Examples**: [examples/](examples/)

## 🔗 References

- [OWASP Top 10 2021 - A01](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
- [CWE-284: Improper Access Control](https://cwe.mitre.org/data/definitions/284.html)
- [OWASP Access Control Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html)
- [PortSwigger Access Control Labs](https://portswigger.net/web-security/access-control)

---

**Next**: [A02: Cryptographic Failures →](../A02-cryptographic-failures/)  
**Category**: [OWASP Top 10](../)  
**Platform**: [A.R.V.I.S.Q.-Skills](../../../)
