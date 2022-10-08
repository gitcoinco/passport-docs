---
description: >-
  The Gitcoin Passport adopts a self sovereign view of user data, enabling users
  to build up a Passport independent from the needs of any particular
  application.
---

# Passport Lifecycle

## The Passport Lifecycle

At its core, a Passport is a self-sovereign data collection built on the Ceramic Network, created in line with the Decentralized Identifier (DID) and Verifiable Credential (VC) specifications.&#x20;

This data is intended for broad interoperability for any system that wishes to issue or consume VCs to establish the ‘personhood’ of an individual through their direct ownership of multiple accounts (Twitter, BrightID), or web3 assets (ENS). It is our intention to continue expanding the passport to additionally help individuals collect stamps that represent their participation in various groups and communities.

### Step by Step - Passport Lifecycle

#### Presenting a Passport&#x20;

For this example, we’ll consider an app that has integrated with Gitcoin Passport and requires users to have a particular set of stamps (VCs) to interact with their system.

Upon arriving at this app, the user is prompted to connect their passport. The user signs a message in their wallet that controls their Passport, granting the app access to public key, and the app can lookup their DID (https://github.com/w3c-ccg/did-pkh).&#x20;

The app then attempts to fetch the Passport data from Ceramic.&#x20;

* If no passport is found, the user can be informed to create their passport on a frontend such as [passport.gitcoin.co ](https://passport.gitcoin.co)
*   If a passport is found, the app can read and score the passport. If the user's passport holds the set of stamps required by the app the flow is over and the user can continue on and safely participate in the app’s ecosystem. If not, the user can be prompted to add any additional stamps to their passport before continuing

    ####

#### Creating and Managing a Passport

If the user does not have a passport or does not hold enough stamps to meet that app's needs, the user should be directed to an instance of the Passport app to manage their passport. Gitcoin hosts an instance of the Passport app at [passport.gitcoin.co](https://passport.gitcoin.co)

{% hint style="info" %}
Gitcoin's instance of the Passport app has integrated the identity and verification stamps necessary for building their Gitcoin Trust Bonus. The Trust Bonus incentivises users to provide multiple stamps as evidence that they are a single user, and in reward are given increasing weight to their matching abilities in the Quadratic Funding mechanism used by Gitcoin Grants.
{% endhint %}

Once connected to a Passport application, users sign a message granting the app control of their Ceramic stream. New users will have a blank passport created, and existing users will see their passport data and existing stamps. They can then continue managing their passport, linking new services and connecting stamps to enrich their verifiable online identity.

#### Scoring and Verifying a Passport&#x20;

When a passport is presented to an app, the app can easily read the contents (see the SDK Reader), and decide if the user has collected the necessary stamps to continue into the system. But, it is important to note, that the Verifiable Credentials records require an additional step to ensure they were correctly issued. The Verification of the VCs is done by using the Verifier package in the SDK.

The integrating app should adhere to this process to ensure they aren’t being presented passports with invalid VCs, that VCs were issued by trusted servers, or that the same VC isn’t representing the same attestation and being created in multiple passports and represents a unique 3rd party record (credentialSubject Hash is explicitly for this purpose, and is currently holding a salted 1 way hash of a unique value from the underlying attestation).
