---
sidebar_position: 2
---

# Getting Started

Welcome to the **Loreum Network**! This guide will walk you through the steps to set up your first Loreum Node, so you can start contributing to and benefiting from the network.

---

## Prerequisites

Before you begin, ensure you have the following:

1. **System Requirements**:
   - **CPU**: 4 cores or higher
   - **RAM**: 8 GB minimum
   - **Storage**: 50 GB free space
   - **Operating System**: Linux, macOS, or Windows

2. **Installed Software**:
   - [Node.js](https://nodejs.org/) (v16 or higher)
   - [Docker](https://www.docker.com/) (for containerized setup)
   - Git (optional, for cloning repositories)

3. **Network Access**:
   - Stable internet connection.

4. **Wallet**:
   - A cryptocurrency wallet compatible with the LORE token to interact with the network.

---

## Installation Methods

### **1. Local Installation**

Set up a Loreum Node on your local machine for development or personal use.

#### Step 1: Clone the Repository
```bash
# Clone the official repository
git clone https://github.com/Loreum/loreum-node.git
cd loreum-node
```

#### Step 2: Install Dependencies
```bash
# Install required dependencies
npm install
```

#### Step 3: Configure Your Node
Create a `.env` file in the project root and specify the following:

```plaintext
NODE_NAME=your-node-name
WALLET_ADDRESS=your-wallet-address
API_KEY=your-api-key
```

#### Step 4: Start the Node
```bash
# Start the Loreum Node
npm run start
```
Your Loreum Node should now be running locally. Access the dashboard at `http://localhost:3000`.

---

### **2. Cloud Deployment**

Deploy your Loreum Node on a cloud service for better scalability and uptime.

#### Step 1: Choose a Cloud Provider
- AWS, Google Cloud, or DigitalOcean are recommended.

#### Step 2: Pull the Docker Image
```bash
# Pull the official Docker image
docker pull loreum/loreum-node
```

#### Step 3: Run the Container
```bash
# Run the Docker container
docker run -d \
  -e NODE_NAME=your-node-name \
  -e WALLET_ADDRESS=your-wallet-address \
  -e API_KEY=your-api-key \
  -p 3000:3000 \
  loreum/loreum-node
```

Your node will now be accessible via the cloud instance's public IP.

---

## Verifying Your Node

After setup, verify that your node is successfully connected to the Loreum Network:

1. Visit the dashboard (local or cloud): `http://<your-node-ip>:3000`
2. Check your node’s status in the network using the built-in monitoring tools.

---

## Next Steps

- Explore the [Core Concepts](core/overview.md) to understand how the Loreum Network operates.
- Learn how to [Monetize Queries](guides/advanced/query-optimization.md) and contribute effectively to the network.
- Integrate your node with the [Loreum API](api/overview.md) to automate tasks and expand functionality.

Congratulations! You’re now part of the Loreum Network. Let’s shape the future of decentralized intelligence together!



