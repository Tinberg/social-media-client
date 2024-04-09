# Workflow

The goal of this project is to enhance the quality of an existing application by implementing various development workflows and testing strategies. The application, based on the Noroff API Social Media client, now includes comprehensive unit and end-to-end testing with Jest and Cypress, continuous integration and deployment workflows, and other quality assurance measures to ensure a robust development cycle.

## Acknowledgments

- This project is a fork of [Original Project Name](https://github.com/noroffFEU/social-media-client)

## Workflow Status Badges

![Deploy static content to Page](https://github.com/Tinberg/social-media-client/actions/workflows/pages.yml/badge.svg)
![Pages-build-deployment](https://github.com/Tinberg/social-media-client/actions/workflows/pages/pages-build-deployment/badge.svg)

## Installation

To test this project, follow these step-by-step instructions to set up your development environment.

1. **Clone the Repository:**

- Clone Repo:

```
git clone https://github.com/Tinberg/social-media-client
```

- Navigate to the project directory:

```
cd <repository>
```

2. **Install Dependencies:**

- Install the necessary npm packages including those required for testing:
  ```
  npm install
  ```

3. **Configure Testing Environment:**

   - This project is configured with Jest for unit tests and Cypress for end-to-end testing. Ensure you have all the testing dependencies installed by checking the `package.json` file. They should have been installed in the previous step with `npm install`.

4. **Running Tests:**

- To run Jest and cypress:

```
    npm run test
```

- To run Jest:

```
    npm run test-unit
```

- To open cypress for end-to-end tests:
  ```
    npx cypress open
  ```
- Follow the on-screen instructions to execute the Cypress tests.
