# DevOps
This document outlines the DevOps process for the Banh Mi Bros project, detailing the integration with development and operations across the entire software lifecycle enabling continuous delivery. 

- [DevOps](#devops)
  - [1.1 DevOps Phases](#11-devops-phases)
    - [1. Plan](#1-plan)
    - [2. Code](#2-code)
    - [3. Build](#3-build)
    - [4. Test](#4-test)
    - [5. Release](#5-release)
    - [6. Deploy](#6-deploy)
    - [7. Operate](#7-operate)
    - [8. Monitor](#8-monitor)

<br>

## 1.1 DevOps Phases
The DevOps phases and how they are handled in the project. 

### 1. Plan
- **Tool**: Notion
- **Description**: This phase involves defining project goals, scope, and requirements.
- **Backlog Management**: Creating and prioritizing user stories and features.
- **Planning**: Defining tasks and fitting them in respective future versions.
- **Roadmap**: Visualizing the project's long-term direction and versions.

### 2. Code
- **Tool**: GitHub ([ZNGR-DYNAMICS/banhmibros](https://github.com/ZNGR-DYNAMICS/banhmibros))
- **Description**: This phase focuses on the development of the experience's features.
- **Version Control**: Managing the codebase using git, tracking changes, and enabling collaboration.
- **Branching Strategy**: Branching model to isolate features, bug fixes, and releases.
- **Pull Requests and Code Reviews**: Facilitating collaborative code review processes to ensure code quality.

### 3. Build
- **Tool**: GitHub Actions (`preview-deploy.yml`, `production-deploy.yml`), `npm`
- **Description**: This phase involves transforming the code into a deployable artifact.
- **Dependency Management**: Installing project dependencies using `npm install`.
- **Compilation/Building**: Compiling the React frontend using `npm run build` (leveraging Vite).
- **Artifact Creation**: Generating the production-ready build output in the `_dist` directory.
- **Backend Packaging**: Copying the PHP backend files (`api` folder) for deployment.

### 4. Test
- **Tool**: `vitest`, GitHub Actions (`preview-deploy.yml`, `production-deploy.yml`)
- **Description**: This phase ensures the quality and functionality of the built application.
- **Automated Unit Tests**: Executed using `npm test` as part of the CI pipeline to verify individual components and functions.
- **Continuous Integration Testing**: The `preview-deploy.yml` workflow automatically runs tests on every manual trigger, providing early feedback on code changes.
- **Potential for Further Testing**: This phase could be expanded to include integration tests, end-to-end tests.
- **User acceptance tests (UAT)** are performed together with the client at the client's business. If the client signs-off to the changes, the changes are released.

### 5. Release
- **Tool**: GitHub Actions (`production-deploy.yml`), Git, Plesk
- **Description**: This phase involves making the tested and approved build available for deployment to the production environment.
- **Merging to Main**: Code that is ready for production is merged into the `main` branch on GitHub.
- **Automated Production Build**: The `production-deploy.yml` workflow is triggered on pushes to the `main` branch, building and pushing to the `production` branch.
- **Tagging**: While not explicitly in the workflow, releases could be marked with Git tags on the `main` branch for versioning and historical tracking. This would be a manual process as of right now.

### 6. Deploy
- **Tool**: GitHub Actions (`preview-deploy.yml`, `production-deploy.yml`)
- **Description**: This phase involves deploying the released build to the target environments.
- **Preview Deployment**: The `preview-deploy.yml` workflow force-pushes the built artifacts to the `preview` branch on GitHub. This triggers a webhook at GitHub, from HostTech defined in Plesk, to update the preview environment to pull the latest changes through git automatically to the server.
- **Production Deployment:** The `production-deploy.yml` workflow force-pushes the built artifacts to the `production` branch on GitHub. The actual deployment is not setup yet.

### 7. Operate
- **Tool**: HostTech, Plesk
- **Description**: This phase involves running and maintaining the application in the production environment.
- **Server Management**: Ensuring the HostTech server is running and configured correctly.
- **Application Monitoring**: Tracking application performance, health, and resource utilization through Plesk. 
- **Logging**: Collecting and analyzing application logs for debugging and issue identification through Plesk's logs.
- **Security Management**: Implementing and maintaining security measures for any issues that arise, or as soon as the database is fully initialized. 

### 8. Monitor
- **Tool**: Plesk, BetterStack
- **Description**: This phase focuses on observing the application in production to identify issues, understand performance, and gather insights for future improvements. 
- **Application Performance Monitoring (APM)**: Tracking response times, error rates, and other performance metrics.
- **Log Analysis**: Reviewing logs from Plesk for errors, warnings, and other relevant events.
- **Infrastructure Monitoring**: Tracking server health, CPU usage, memory, and network traffic.
- **Alerting** notifications are to be set up on mobile through Better Stack, once the web-experience is set to production, capturing downtime.
