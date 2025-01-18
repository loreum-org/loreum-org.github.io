"use strict";(self.webpackChunkdocs_loreum_org=self.webpackChunkdocs_loreum_org||[]).push([[7924],{6475:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"getting-started","title":"Getting Started","description":"Welcome to the Loreum Network! This guide will walk you through the steps to set up your first Loreum Node, so you can start contributing to and benefiting from the network.","source":"@site/docs/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/loreum-org/docs/edit/main/docs/getting-started.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Mission","permalink":"/mission"},"next":{"title":"Network","permalink":"/network"}}');var o=r(4848),s=r(8453);const l={},i="Getting Started",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Methods",id:"installation-methods",level:2},{value:"<strong>1. Local Installation</strong>",id:"1-local-installation",level:3},{value:"Step 1: Clone the Repository",id:"step-1-clone-the-repository",level:4},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:4},{value:"Step 3: Configure Your Node",id:"step-3-configure-your-node",level:4},{value:"Step 4: Start the Node",id:"step-4-start-the-node",level:4},{value:"<strong>2. Cloud Deployment</strong>",id:"2-cloud-deployment",level:3},{value:"Step 1: Choose a Cloud Provider",id:"step-1-choose-a-cloud-provider",level:4},{value:"Step 2: Pull the Docker Image",id:"step-2-pull-the-docker-image",level:4},{value:"Step 3: Run the Container",id:"step-3-run-the-container",level:4},{value:"Verifying Your Node",id:"verifying-your-node",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,o.jsxs)(n.p,{children:["Welcome to the ",(0,o.jsx)(n.strong,{children:"Loreum Network"}),"! This guide will walk you through the steps to set up your first Loreum Node, so you can start contributing to and benefiting from the network."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Before you begin, ensure you have the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"System Requirements"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CPU"}),": 4 cores or higher"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RAM"}),": 8 GB minimum"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Storage"}),": 50 GB free space"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Operating System"}),": Linux, macOS, or Windows"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Installed Software"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," (v16 or higher)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," (for containerized setup)"]}),"\n",(0,o.jsx)(n.li,{children:"Git (optional, for cloning repositories)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Network Access"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Wallet"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A cryptocurrency wallet compatible with the LORE token to interact with the network."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"installation-methods",children:"Installation Methods"}),"\n",(0,o.jsx)(n.h3,{id:"1-local-installation",children:(0,o.jsx)(n.strong,{children:"1. Local Installation"})}),"\n",(0,o.jsx)(n.p,{children:"Set up a Loreum Node on your local machine for development or personal use."}),"\n",(0,o.jsx)(n.h4,{id:"step-1-clone-the-repository",children:"Step 1: Clone the Repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Clone the official repository\ngit clone https://github.com/Loreum/loreum-node.git\ncd loreum-node\n"})}),"\n",(0,o.jsx)(n.h4,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Install required dependencies\nnpm install\n"})}),"\n",(0,o.jsx)(n.h4,{id:"step-3-configure-your-node",children:"Step 3: Configure Your Node"}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:".env"})," file in the project root and specify the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"NODE_NAME=your-node-name\nWALLET_ADDRESS=your-wallet-address\nAPI_KEY=your-api-key\n"})}),"\n",(0,o.jsx)(n.h4,{id:"step-4-start-the-node",children:"Step 4: Start the Node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Start the Loreum Node\nnpm run start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your Loreum Node should now be running locally. Access the dashboard at ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"2-cloud-deployment",children:(0,o.jsx)(n.strong,{children:"2. Cloud Deployment"})}),"\n",(0,o.jsx)(n.p,{children:"Deploy your Loreum Node on a cloud service for better scalability and uptime."}),"\n",(0,o.jsx)(n.h4,{id:"step-1-choose-a-cloud-provider",children:"Step 1: Choose a Cloud Provider"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"AWS, Google Cloud, or DigitalOcean are recommended."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"step-2-pull-the-docker-image",children:"Step 2: Pull the Docker Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Pull the official Docker image\ndocker pull loreum/loreum-node\n"})}),"\n",(0,o.jsx)(n.h4,{id:"step-3-run-the-container",children:"Step 3: Run the Container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Run the Docker container\ndocker run -d \\\n  -e NODE_NAME=your-node-name \\\n  -e WALLET_ADDRESS=your-wallet-address \\\n  -e API_KEY=your-api-key \\\n  -p 3000:3000 \\\n  loreum/loreum-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"Your node will now be accessible via the cloud instance's public IP."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"verifying-your-node",children:"Verifying Your Node"}),"\n",(0,o.jsx)(n.p,{children:"After setup, verify that your node is successfully connected to the Loreum Network:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the dashboard (local or cloud): ",(0,o.jsx)(n.code,{children:"http://<your-node-ip>:3000"})]}),"\n",(0,o.jsx)(n.li,{children:"Check your node\u2019s status in the network using the built-in monitoring tools."}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);