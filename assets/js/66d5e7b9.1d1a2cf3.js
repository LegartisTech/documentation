"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[107],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>y});var n=t(7294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},l=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(y,a(a({ref:o},l),{},{components:t})):n.createElement(y,a({ref:o},l))}));function y(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var p={};for(var c in o)hasOwnProperty.call(o,c)&&(p[c]=o[c]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<r;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},402:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:4},a="Create data points",p={unversionedId:"api/prompts_4",id:"api/prompts_4",title:"Create data points",description:"All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman.",source:"@site/docs/api/prompts_4.md",sourceDirName:"api",slug:"/api/prompts_4",permalink:"/documentation/docs/api/prompts_4",draft:!1,editUrl:"https://github.com/LegartisTech/documentation/tree/main/documentation/docs/api/prompts_4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create playbook",permalink:"/documentation/docs/api/playbooks_3"},next:{title:"Analyzing documents by api",permalink:"/documentation/docs/api/analyzing_documents_5"}},c={},s=[{value:"Create prompt",id:"create-prompt",level:2},{value:"Assign prompt to a playbook provision",id:"assign-prompt-to-a-playbook-provision",level:2}],l={toc:s},d="wrapper";function u(e){let{components:o,...t}=e;return(0,i.kt)(d,(0,n.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-data-points"},"Create data points"),(0,i.kt)("p",null,"All provided examples in this guide are shown in python code. To get the code in other programming languages, follow the third party integration guide howto import openapi specifications in Postman."),(0,i.kt)("h2",{id:"create-prompt"},"Create prompt"),(0,i.kt)("p",null,"A prompt is a question or statement designed to extract specific information from a contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plabyook_id = 123 # Define playbook as described in playbook section\n\n# Configure API client settings\nconfiguration = Configuration()\nconfiguration.host = os.environ["ONTOLOGY_SERVICE_HOST"]\nconfiguration.access_token = ... # see getting started section\n\nautomated_checkpoint_api = AutomatedcheckpointApi(ApiClient(configuration))\n\n# Define a UUID for a jurisdiction court boolean template\njurisdiction_court_boolean_template_id = "acc20b29-3a7d-43e2-ad89-aeb5eea5ec7a"  # uuid4()\n\n# Create an automated checkpoint by ID\njurisdiction_court_boolean_acp: AutomatedCheckpointReadData = automated_checkpoint_api.create_acp_by_id_v2(\n    body=AutomatedCheckpointCreateData(\n        friendly_id="company_jurisdiction_court_prompt",\n        provision_id="jurisdiction_courts",\n        normalization_type=NormalizationType.BOOLEAN,\n        templates=[\n            SingleAutomatedCheckpointCreateData(\n                id=jurisdiction_court_boolean_template_id,\n                name="Jurisdiction Court Prompt",\n                prompt="Is the court in Hamburg?",\n                language="de",\n                prompt_type="boolean",\n                released=True,\n                model=FLAN_MODEL_UUID,\n            )\n        ],\n    ),\n)\n\n# Print friendly id which is a combination of {company}_{passed friendly_id}\nprint(jurisdiction_court_boolean_acp.friendly_id)\n\n')),(0,i.kt)("h2",{id:"assign-prompt-to-a-playbook-provision"},"Assign prompt to a playbook provision"),(0,i.kt)("p",null,"To evaluate a prompt, assign it to a playbook provision. A playbook provision is a subscription to a specific provision within a playbook, directly linking the prompt to the relevant section of the playbook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plabyook_id = 123 # Define playbook as described in playbook section\njurisdiction_court_boolean_friendly_id = "legartis_company_jurisdiction_court_prompt"\n\n# Configure API client settings\nconfiguration = Configuration()\nconfiguration.host = os.environ["ONTOLOGY_SERVICE_HOST"]\nconfiguration.access_token = ... # see getting started section\n\nplaybook_provision_api = PlaybookprovisionApi(ApiClient(configuration))\n\n# Update the playbook provision with the created playbook and automated checkpoint\nplaybook_provision = playbook_provision_api.update_full_playbook_provision_v2(\n    playbook_provision_id="5ee22753-4657-44dd-bc5d-e691dd13c888",\n    body=FullPlaybookProvisionUpdate(\n        playbook_provision=LegartisSdkOntologyServiceHttpHelperModelsPlaybookProvisionPlaybookProvisionUpdateData(\n            provision_id="jurisdiction_courts",\n            playbook_id=plabyook_id,  # see \'playbook section\'\n            enabled=True,\n            definition_type="internal",\n        ),\n        standard_texts=[],\n        prompts=[\n            FullPlaybookProvisionPromptConnectionUpdateData(\n                is_active=True,\n                friendly_id=jurisdiction_court_boolean_friendly_id,\n                rule=dict(\n                    data=OrRuleInput(\n                        terms=[\n                            LocationRule(country_id="DE", region_id="DE-HH", city_id="1276041799"),\n                        ]\n                    )\n                ),\n            )\n        ],\n        manual_requirement=None,\n    ),\n)\n\n# Print the updated playbook provision details\nprint(playbook_provision.playbook_provision.id)\n\n\n')))}u.isMDXComponent=!0}}]);