# Offers_Share


**Access Offers_Share in your browser at this** [link](https://www.videlo.net/) 


## Overview

Offers_Share is a web application that enables users to share and discover great offers, deals, and discounts. It provides a platform for users to contribute, explore, and take advantage of exciting offers in an interactive and user-friendly manner.

## Architecture

The application follows a modern multi-container architecture using Docker, with a microservices approach to facilitate flexibility, scalability, and ease of deployment. Key components include the Frontend Service, Backend Service, and Database Service, which work together harmoniously to deliver a sophisticated and user-friendly platform. Application comes with built-in monitoring to ensure a reliable and high-performance user experience.

### Frontend Service

The frontend service handles the user interface and provides an intuitive and responsive web interface for users to browse, search, and submit offers.

### Backend Service

The backend service is responsible for processing user requests, handling business logic, and communicating with external APIs or databases.

### Database Service

This service is responsible for storing and retrieving data required by the application.

### Monitoring with Prometheus and Blackbox Exporter:

These monitoring tools provide crucial insights into the health and behavior of our microservices architecture.
Prometheus is configured to set up alerts based on predefined thresholds. When a metric exceeds the specified limits, Prometheus triggers alerts and sends notifications to our operations team via email. This proactive approach ensures prompt incident response and issue resolution.

## Features

-    **Offer Listing**: Browse through a wide range of offers.
-    **Search**: Easily search for specific offers based on keywords, filters, date added, or expiration date.
  
-    **Offer Details**: View detailed information about an offer, including description, terms, and conditions.
 
-   **User Actions**: Users can perform various actions on offers:
  
    -   If you are a regular user:
        -   Add an offer to your watchlist for easy access and reminders.
        -   Remove an offer from your watchlist.
         
    -   If you are the owner of an offer:
        -   Edit the offer details, such as title, description, and expiration date.
        -   Delete an offer when it is no longer valid.
  
-    **User Profiles**: Each user has a profile page displaying their information and activity history.
  
-    **Watchlist**: Users can view their watchlist, which includes all the offers they have added for quick reference.
  
-    **Offer Submission**: Everyone who offer quality service or sell products can became our partner and will have prevelige to create and submit new offers to the platform, providing comprehensive details.
  
-    **User Authentication**: User registration and authentication functionality ensures secure access to the app.
-    **Responsive Design**: The app is designed to be responsive and accessible across different devices.

## Technologies Used

Offers_Share is built using the following technologies:

-    [Angular](https://angular.io/): A popular web framework for building dynamic single-page applications.
-    [Angular Material](https://material.angular.io/): A UI component library for Angular that provides pre-built and customizable UI components.
-    [Express](https://expressjs.com/): A fast and minimalist web framework for building Node.js applications.
-    [MongoDB](https://www.mongodb.com/): A popular NoSQL database used for storing application data.
-    [Mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js.
-    [Express-Validator](https://express-validator.github.io/): A set of express.js middlewares for input validation and sanitization.
-    [Nodemailer](https://nodemailer.com/): A module for Node.js applications to allow easy as cake email sending.
-    [JWT (JSON Web Token)](https://jwt.io/): A standard for securely transmitting information between parties as a JSON object.
-    [NGRX](https://ngrx.io/): A state management library for Angular applications.
-    [Docker](https://www.docker.com/): A containerization platform that allows applications to run in isolated environments.
-    [Terraform](https://www.terraform.io/): An infrastructure as code tool for provisioning and managing cloud resources.
-    [Azure](https://azure.microsoft.com/): A cloud computing platform by Microsoft, used for deploying and hosting the Offers_Share application.
-    [dotenv](https://www.npmjs.com/package/dotenv): A module for loading environment variables from a `.env` file.
-    [bcrypt](https://www.npmjs.com/package/bcrypt): A library for hashing passwords and ensuring secure password storage.
-    [nodemon](https://www.npmjs.com/package/nodemon): A development utility that automatically restarts the server upon file changes.
-    [toastr](https://www.npmjs.com/package/toastr): A JavaScript library for displaying toast notifications.
-    [Nginx](https://nginx.org/): A high-performance web server and reverse proxy server.
-    [Cloudinary](https://cloudinary.com/): A cloud-based media management platform for storing and manipulating images and videos.

**Information**: A repository typically contains various components of a software project, including code, app structure, and architectural elements. However, it's important to note that not all features and essential files may be included in the repository. This could be due to various reasons such as sensitive information, proprietary algorithms, or large binary files that are not suitable for version control. Therefore, while the repository provides a valuable insight into the project, it may not encompass all the functionalities or crucial files associated with it.

## Screenshots

### Home Page

![Home Page](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473497/offers_share_project_presentation/2023-08-31_11_32_51-_etted6.png)

### Offers Listing

![All Offers](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473502/offers_share_project_presentation/2023-08-31_11_53_21-Window_lcj7rb.png)

![Get Available offers for specific Date](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473500/offers_share_project_presentation/2023-08-31_11_42_23-_fbsnlc.png)

![Filter offers](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473500/offers_share_project_presentation/2023-08-31_11_41_37-_ala510.png)

![Anonimous visitor - Details Page](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473499/offers_share_project_presentation/2023-08-31_11_45_58-_fzzzkk.png)

![Creator user - Details Page](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473500/offers_share_project_presentation/2023-08-31_12_01_17-_l1aqrv.png)

![Offer edit Page](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473497/offers_share_project_presentation/2023-08-31_12_07_05-Window_puijml.png)

### Shoping Cart

![Add customers information](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473497/offers_share_project_presentation/2023-08-31_11_47_20-Window_dgc4hm.png)

![Shopping Cart - checkout](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473495/offers_share_project_presentation/2023-08-31_11_47_59-Window_lozbbk.png)

![Add Contacts information](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473496/offers_share_project_presentation/2023-08-31_11_49_04-_hr3fbt.png)

### Authenticate
    
![Log-ig](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473515/offers_share_project_presentation/2023-08-31_11_40_14-_vqajen.png)

### Profile

![Profile](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473528/offers_share_project_presentation/2023-08-31_12_05_39-_g2efqa.png)

### Admin panel

![Admin panel](https://res.cloudinary.com/duyubdgsj/image/upload/v1695156405/offers_share_project_presentation/2023-09-19_23_35_19-Window_zkvg2v.png)

### Responsive

![Mobile view](https://res.cloudinary.com/duyubdgsj/image/upload/v1693473497/offers_share_project_presentation/2023-08-31_12_02_47-Window_gl2tq6.png)

### Prometheus

![Alerts view](https://res.cloudinary.com/duyubdgsj/image/upload/v1690238902/2023-07-25_01_00_45-_cwrfjd.png)


