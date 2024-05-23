"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?o.createElement(g,r(r({ref:t},l),{},{components:n})):o.createElement(g,r({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},r="Analyzing documents by api",c={unversionedId:"api/analyzing_documents_5",id:"api/analyzing_documents_5",title:"Analyzing documents by api",description:"All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman.",source:"@site/docs/api/analyzing_documents_5.md",sourceDirName:"api",slug:"/api/analyzing_documents_5",permalink:"/documentation/docs/api/analyzing_documents_5",draft:!1,editUrl:"https://github.com/LegartisTech/documentation/tree/main/documentation/docs/api/analyzing_documents_5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create data points",permalink:"/documentation/docs/api/prompts_4"},next:{title:"Third party integrations",permalink:"/documentation/docs/api/third_party_integrations_20"}},p={},d=[{value:"Uploading a Document",id:"uploading-a-document",level:2},{value:"Receiving Document Data",id:"receiving-document-data",level:2}],l={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analyzing-documents-by-api"},"Analyzing documents by api"),(0,a.kt)("p",null,"All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman."),(0,a.kt)("h2",{id:"uploading-a-document"},"Uploading a Document"),(0,a.kt)("p",null,"To upload a document, select the v2/Document API and then select the POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v2/document/document/")," API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'base_url = "api.legartis.ai" \ncompany = "demo_company" \ndocument_id = uuid.uuid4() \npipeline_id = uuid.uuid4()\nplabyook_id = 123 # Define playbook as described in playbook section\n\ndata = {\n    "id": document_id, # UUID used later to pull the document\n    "playbook_id": plabyook_id,\n    "pipeline_id": pipeline_id, # UUID, automatically triggers the extraction/classification, not just the upload\n    "company_id": company,\n    "mime_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",\n    "title": "Test.docx", \n}\nfiles = {\'file\': open(\'nda.docx\', \'rb\')}\nheaders = {"Authorization": f"Bearer {access_token}"}\nresponse = requests.post(f"https://document.{base_url}/v2/document/document/", headers=headers, data=data, files=files)\nresponse_data: dict = response.json()\n')),(0,a.kt)("h2",{id:"receiving-document-data"},"Receiving Document Data"),(0,a.kt)("p",null,"To receive the extracted document data use the endpoint: /v2/workflow-pipeline/aggregated/{document_id}/"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'data = {"company" : "demo_company" }\nresponse = requests.get(f"https://workflow.{base_url}/v2/workflow-pipeline/task/aggregated/{document_id}/",params=data, headers=headers)\nresponse_data: dict = response.json()\n')))}u.isMDXComponent=!0}}]);