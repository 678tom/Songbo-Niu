# Fementity Deployment Plan

This document contains the initial deployment plan for the Fementity website.

**Quick Links:**

- [Proposed Architecture](#proposed-architecture)
- [Pipeline](#pipeline)
  - [Github](#github)
  - [Cloud Build](#cloud-build)
  - [Container Registry](#container-registry)
- [Compute](#compute)
  - [Cloud Run](#cloud-run)
- [Data Storage](#data-storage)
  - [Cloud SQL](#cloud-sql)
- [Networking](#networking)
  - [Load Balancer](#load-balancer)
  - [External IP Address](#external-ip-address)
- [Authentication](#authentication)
  - [Firebase Authentication](#firebase-authentication)
- [Third Party Services](#third-party-services)
  - [Shopify](#shopify)

_**Note**: This is a living document and as we continue the development of Fementity this document is subject to change._

## Proposed Architecture

The following image is the proposed architecture for Fementity.

![Fementity Deployment](https://user-images.githubusercontent.com/79548865/161752739-dc57f0db-ac2f-449c-9dbb-61bedc6f9a3e.png)

## Pipeline

To create an easy environment for future development, Fementity will have a continuous integration and continuous delivery (CI/CD) pipeline setup so any future changes are automatically deployed an available to users.

### GitHub

We will use GitHub to host our code, as well as hook into Google's pipeline service [Cloud Build](#cloud-build).

### Cloud Build

Google's Cloud Build will enable Fementity to automatically build Docker images when changes are made in the GitHub repository.
It will also allow us to push these new images to Google's [Container Registry](#container-registry) as well as deploying the new images directly to [Cloud Run](#cloud-run).

### Container Registry

We will be using Google's Container Registry to store the various Docker images that we build through [Cloud Build](#cloud-build) allowing us to easily revert to an older version if a major bug/issue is found after the image has been pushed to production.

We will also be clearing out old unused containers to save on the costs of storing them.

## Compute

To enable the actual website and API for Fementity, we will be using Google's [Cloud Run](#cloud-run) compute service.

### Cloud Run

We will be using Google's Cloud Run service to run the container images for both the Frontend and Backend portions of Fementity in a serverless environment.

Cloud Run provides use with various levels of resource customization as well as providing customizations for scaling enabling Fementity to meet all of the users needs.

## Data Storage

For Fementity data storage solution we have chosen to go with [Cloud SQL](#cloud-sql) service, running a Postgres instance.

### Cloud SQL

To store all remaining data such as business information and newsletter data, we will be using Google's Cloud SQL service.
This service provides a variety of different SQL services, for Fementity we will be using Postgres for it's reliability and feature set.

## Networking

To make the site fully accessible to the internet, route traffic to the respective service,
and assign an IP to point the custom domain to we have deployed a [load balancer](#load-balancer)
and an [external IP address](#external-ip-address).

### Load Balancer

To connect the [cloud run](#cloud-run) instances to the internet we have deployed a HTTP(S) load
balancer to route the traffic between the front-end and api instances accordingly.

### External IP Address

To allow a custom domain to be pointed towards the application it requires an IP address so we have
reserved on with the external IP address service and have created an A record in Google Domains.

## Authentication

To provide authentication for the Fementity application the agreed upon solution 
was to use the [Firebase Authentication](#firebase-authentication) service offered through GCP and can be
connected to the Fementity GCP project for a single payment.

### Firebase Authentication

To securely authenticate users, and to safely manage credentials, we will be using Firebase Authentication. This service allows us to authenticate users safely without having to worry about storing a user's credentials.  Firebase also provides sign-in options with Google, Facebook, etc., and has extensive support for messaging, SMS verification, email verification, Multi Factor Authentication, password reset, anonymous login, and so on. 

## Third Party Services _*NOT YET IMPLEMENTED*_

To ensure that we do not reinvent the wheel, the client has given us permission with exploring third-party services to save time on development.

### Shopify

As per the requirements from the Client, they are interested in having a store to sell products through.
Rather than reinventing the wheel and creating more work for the team, the Client has given the go ahead to use [Shopify](https://www.shopify.com/) to handle the back end of the storefront.

Shopify provides tools for business owners to easily create a storefront for their products with little technical know-how.
However at the request of the client, for Fementity the Point of Sale (POS) team will be using the [Shopify Storefront API](https://shopify.dev/api/storefront#top).

The [Shopify Storefront API](https://shopify.dev/api/storefront#top) provides functionality for developers to create their own storefront well providing all the tools required for running a full storefront such as: accessing products, shopping cart, and checkout.

### Paypal

The Dual Login team is planning on connecting Paypal to the Fementity web application as an alternative to providing credit card details directly.

Paypal provides an API for developers to hook their applications to conduct secure transactions without worry of having to develop their own payment system for a small commission fee.
