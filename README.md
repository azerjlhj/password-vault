# Password Vault 🔐

A secure password management application built with Node.js, Express.js, and PostgreSQL. This project demonstrates full-stack web development with enterprise-level security practices.

## 🚧 Project Status

**Currently in Development** - Foundation and authentication framework completed.

This project showcases backend architecture, database integration, and security implementation skills.

## ✨ Completed Features

### 🏗️ Server Architecture
- **Express.js server** with comprehensive middleware configuration
- **Session management** with express-session and secure session secrets
- **Static file serving** from public directory
- **EJS templating engine** with modular partials structure

### 🔐 Security Framework
- **Passport.js authentication** with local strategy setup
- **bcrypt password hashing** for secure credential storage
- **Environment variable protection** for sensitive configuration
- **Proper .gitignore** to exclude credentials from version control

### 🗄️ Database Integration
- **PostgreSQL connection** with parameterized configuration
- **Environment-based database credentials** (user, host, database, password, port)
- **Prepared for user accounts and encrypted password storage**

### 🎨 Frontend Structure
- **Responsive design foundation** with organized CSS in public/styles/
- **Component-based templates** with header/footer partials
- **Multiple page structure** (home, login, register)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Server runtime environment |
| **Express.js** | Web application framework |
| **PostgreSQL** | Primary database for user accounts and passwords |
| **Passport.js** | Authentication middleware |
| **bcrypt** | Password hashing and security |
| **EJS** | Server-side templating engine |
| **express-session** | Session management |

## 🔮 Planned Features

- [ ] User registration with email validation
- [ ] Secure user login/logout system
- [ ] Encrypted password storage and retrieval
- [ ] Password strength analyzer
- [ ] Secure password generator
- [ ] Password sharing capabilities
- [ ] Two-factor authentication (2FA)
- [ ] Password history tracking
- [ ] Export/import functionality

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/azerjlhj/password-vault.git
cd password-vault

# Install dependencies
npm install

# Create your environment configuration file
cp .env.example .env
# OR create .env manually with the variables below

# Configure your environment variables (see below)
# Edit .env with your actual database credentials

# Start the server
npm start
```

## ⚙️ Environment Configuration

**🔐 IMPORTANT: Create your own `.env` file (not included in repository for security)**

Create a `.env` file in the project root with these variables:

```env
# Session Security
SESSION_SECRET=your_unique_session_secret_here

# PostgreSQL Database Configuration  
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=passwordVault
PG_PASSWORD=your_postgres_password
PG_PORT=5432
```

### 🛡️ Security Notes:
- **Generate a strong SESSION_SECRET** - Use a random 32+ character string
- **Never commit your .env file** - It contains sensitive credentials
- **Use your actual PostgreSQL credentials** - Replace placeholder values
- **Create the database** - Ensure `passwordVault` database exists in PostgreSQL

## 🏗️ Project Structure

```
Password Vault/
├── index.js              # Main server file with Express configuration
├── package.json           # Project dependencies and scripts
├── .gitignore            # Git ignore rules (excludes .env for security)
├── .env                  # Environment variables (NOT in repository)
├── public/               # Static assets
│   ├── styles/
│   │   └── main.css      # Application styling
│   └── images/           # Image assets
├── views/                # EJS templates
│   ├── partials/
│   │   ├── header.ejs    # Reusable header component
│   │   └── footer.ejs    # Reusable footer component
│   ├── home.ejs          # Landing page
│   ├── login.ejs         # User authentication
│   └── register.ejs      # New user registration
└── README.md             # Project documentation
```

## 🎯 Key Technical Implementations

### Authentication Setup
- Passport.js configured with local strategy
- Session-based authentication with secure cookies
- bcrypt integration for password hashing

### Database Architecture
- PostgreSQL connection with environment variable configuration
- Prepared for user accounts table and encrypted passwords table
- Connection pooling ready for production scaling

### Security Measures
- **Environment variables** for ALL sensitive data (database credentials, session secrets)
- **Proper .gitignore** prevents credential exposure in version control
- **Session secret management** for secure user sessions
- **No hardcoded credentials** anywhere in codebase

## 🔧 Development Commands

```bash
# Start development server
npm start

# Install new dependencies
npm install package-name

# Check for security vulnerabilities
npm audit
```

## 📈 Future Enhancements

This project will demonstrate advanced concepts including:
- **Database design** for secure password storage
- **Encryption/decryption** of sensitive user data
- **RESTful API design** for password management
- **Input validation** and sanitization
- **Error handling** and logging
- **Testing** with unit and integration tests

## 🚨 Security Best Practices Demonstrated

- ✅ **Environment variable protection** - All sensitive data in .env (excluded from Git)
- ✅ **Secure session management** - Strong session secrets and proper configuration
- ✅ **Database credential protection** - No hardcoded passwords in source code
- ✅ **.gitignore implementation** - Prevents accidental credential commits
- ✅ **Production-ready security** - Follows industry standard practices

## 🤝 Contributing

This is a learning project showcasing full-stack development skills. Feedback and suggestions are welcome!

## 📄 License

This project is for educational and portfolio purposes.

---

*Built with security and best practices in mind* 🛡️
## 📄 License

This project is for educational and portfolio purposes.

---

*Built with security and best practices in mind* 🛡️
