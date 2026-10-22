# A.R.V.I.S.Q.-Skills

> **A**gentic AI **R**esearch, **V**ulnerability **I**nvestigation, **S**kills & **Q**uests - Security Skills Platform

🛡️ **A publicly available, open-source security skills hub for the modern web.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yourusername/A.R.V.I.S.Q.-Skills/pulls)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange.svg)](CONTRIBUTING.md)
[![npm packages](https://img.shields.io/badge/npm-10%2B%20packages-red.svg)](https://www.npmjs.com/search?q=%40arvisq)
[![PyPI packages](https://img.shields.io/badge/PyPI-5%2B%20packages-blue.svg)](https://pypi.org/search/?q=arvisq)

---

## 🎯 Mission

**A.R.V.I.S.Q.-Skills** is a publicly available, open-source platform providing comprehensive security knowledge, tools, and packages for the global security community.

### What We Provide

#### 📚 Security Knowledge Base
- **OWASP Top 10** - Web application security fundamentals with detection and remediation guides
- **OWASP LLM Top 10** - AI/LLM-specific vulnerabilities with real-world exploitation examples
- **API Security** - Comprehensive guides for securing REST, GraphQL, and gRPC APIs
- **Backend Security** - Rate limiting, authentication, authorization, and hardening checks

#### 🔧 Open-Source Testing Tools
- **API Rate Limiter Checker** - Validate rate limiting implementations
- **Backend Security Scanner** - Headers, CORS, TLS validation
- **LLM Prompt Injection Tester** - Detect AI vulnerabilities
- **JWT Security Analyzer** - Token security validation
- **GraphQL Security Scanner** - API introspection and query validation
- **AI Model API Fuzzer** - Adversarial testing for ML models

#### 📦 Published Packages (Free to Use)
- **Python Packages** - `arvisq-owasp-checker`, `arvisq-llm-security`, `arvisq-api-validator`
- **Node.js Packages** - `@arvisq/security-headers`, `@arvisq/jwt-analyzer`, `@arvisq/api-fuzzer`
- **CLI Tools** - `arvisq-scan` unified security scanner

**All packages are MIT licensed and free for commercial and personal use.**

---

## 🚀 Quick Start

Visit the live site: **[yourusername.github.io/A.R.V.I.S.Q.-Skills](https://yourusername.github.io/A.R.V.I.S.Q.-Skills)**

Or run locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/A.R.V.I.S.Q.-Skills.git
cd A.R.V.I.S.Q.-Skills

# Open in browser
open index.html

# Or serve with Python
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## 📚 What's Included

### Security Skills Catalog

#### OWASP Top 10 (2021)
1. **A01:2021** - Broken Access Control
2. **A02:2021** - Cryptographic Failures  
3. **A03:2021** - Injection
4. **A04:2021** - Insecure Design
5. **A05:2021** - Security Misconfiguration
6. **A06:2021** - Vulnerable and Outdated Components
7. **A07:2021** - Identification and Authentication Failures
8. **A08:2021** - Software and Data Integrity Failures
9. **A09:2021** - Security Logging and Monitoring Failures
10. **A10:2021** - Server-Side Request Forgery (SSRF)

#### OWASP LLM Top 10
1. **LLM01** - Prompt Injection
2. **LLM02** - Insecure Output Handling
3. **LLM03** - Training Data Poisoning
4. **LLM04** - Model Denial of Service
5. **LLM05** - Supply Chain Vulnerabilities
6. **LLM06** - Sensitive Information Disclosure
7. **LLM07** - Insecure Plugin Design
8. **LLM08** - Excessive Agency
9. **LLM09** - Overreliance
10. **LLM10** - Model Theft

### Testing Tools

1. **API Rate Limiter Checker** - Test endpoints for rate limiting
2. **Backend Security Scanner** - Headers, CORS, TLS validation
3. **LLM Prompt Injection Tester** - Detect prompt injection vulnerabilities
4. **JWT Security Analyzer** (Coming Soon)
5. **GraphQL Security Scanner** (Coming Soon)
6. **AI Model API Fuzzer** (Coming Soon)

### Published Packages

#### Python
- `arvisq-owasp-checker` - OWASP Top 10 automated checker
- `arvisq-llm-security` - LLM security testing toolkit
- `arvisq-api-validator` - API security validation

#### Node.js
- `@arvisq/security-headers` - Security headers validator
- `@arvisq/jwt-analyzer` - JWT security analysis
- `@arvisq/api-fuzzer` - API fuzzing toolkit

#### CLI
- `arvisq-scan` - Unified security scanner

---

## 🏗️ Project Structure

```
A.R.V.I.S.Q.-Skills/
├── index.html                 # Landing page
├── assets/
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── main.js           # Core JavaScript
│   └── images/
├── skills/
│   ├── owasp-top-10/         # OWASP Top 10 catalog
│   ├── owasp-llm-top-10/     # OWASP LLM Top 10 catalog
│   └── api-security/         # API security guides
├── tools/                     # Web-based tools
├── packages/                  # Package registry
├── docs/                      # Documentation
├── PLAN.md                    # Detailed project plan
└── README.md                  # This file
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add Skills** - Document new vulnerabilities or security patterns
2. **Build Tools** - Create new security testing tools
3. **Publish Packages** - Share reusable security libraries
4. **Improve Docs** - Enhance documentation and examples
5. **Fix Bugs** - Help maintain existing content

### Contribution Guidelines

```bash
# Fork the repository
git clone https://github.com/yourusername/A.R.V.I.S.Q.-Skills.git
cd A.R.V.I.S.Q.-Skills

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ...

# Commit with clear message
git commit -m "Add: Description of your changes"

# Push and create PR
git push origin feature/your-feature-name
```

See [CONTRIBUTING.md](docs/contributing.html) for detailed guidelines.

---

## 📖 Documentation

- [Getting Started](docs/getting-started.html) - Setup and usage guide
- [API Reference](docs/api-reference.html) - Tool and package APIs
- [Contributing Guide](docs/contributing.html) - How to contribute
- [Project Plan](PLAN.md) - Detailed roadmap and milestones

---

## 🔗 Related Projects

- **[A.R.V.I.S.Q.-Challenges](https://github.com/yourusername/A.R.V.I.S.Q.-Challenges)** - Story-driven AI security quest series
- **Portfolio** - [Prasannnakumar.dev](https://prasannnakumar.dev)

---

## 📊 Roadmap

### Phase 1: MVP (Weeks 1-2) ✅
- [x] Landing page with responsive design
- [x] OWASP Top 10 catalog structure
- [x] OWASP LLM Top 10 catalog structure
- [x] Initial tool prototypes
- [x] GitHub Pages deployment

### Phase 2: Enhancement (Weeks 3-6) 🚧
- [ ] Complete skill documentation
- [ ] Interactive vulnerability checkers
- [ ] Advanced tools (JWT, GraphQL scanners)
- [ ] Comprehensive documentation

### Phase 3: Packages (Ongoing) 📦
- [ ] Publish Python packages to PyPI
- [ ] Publish Node.js packages to npm
- [ ] CLI tool distribution
- [ ] Package registry automation

---

## 🌟 Star History

If you find this project useful, please star it!

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Prasanna Kumar**
- Product Security Associate @ SAP Labs India
- Portfolio: [Prasannnakumar.dev](https://prasannnakumar.dev)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Prasanna Kumar](https://linkedin.com/in/yourusername)

---

## 🙏 Acknowledgments

- OWASP Foundation for security standards
- Open source security community
- Contributors and users

---

## 📧 Contact

Have questions or suggestions? 

- Open an [issue](https://github.com/yourusername/A.R.V.I.S.Q.-Skills/issues)
- Start a [discussion](https://github.com/yourusername/A.R.V.I.S.Q.-Skills/discussions)
- Email: your.email@example.com

---

<div align="center">
  <strong>Built with ❤️ for the security community</strong>
  <br>
  <sub>Part of the A.R.V.I.S.Q. project ecosystem</sub>
</div>
