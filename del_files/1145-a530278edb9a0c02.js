(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1145],{69444:function(e,n,t){"use strict";var r,i=t(26042),a=t(69396),o=t(85893),s=t(67294),l=t(50135),u=t(75746),c=t(5306),d=t(98456);(0,u.D)();n.Z=function(e){e.authorize;var n=e.onSelect,t=e.defaultValue,u=e.errorMessage,h=e.apiService,p=e.borderRadius,m=void 0===p?"4px":p,g=e.placeholder,f=void 0===g?"Search Brand":g,x=e.inputBackgroundColor,b=void 0===x?"":x,v=e.height,y=void 0===v?"":v,j=(0,s.useState)(t),Z=j[0],w=j[1],C=(0,s.useState)(!1),q=C[0],_=C[1],S=(0,s.useState)([]),A=S[0],O=S[1],M=(0,s.useState)(!1),k=M[0],N=(M[1],(0,s.useState)("")),R=N[0];N[1];return(0,o.jsx)(c.Z,{value:Z,loading:q,onInputChange:function(e,t,i){"reset"!==i&&t&&(_(!0),r&&clearTimeout(r),r=setTimeout((function(){var e;(e=t).length<2||h.get("/brands?params="+JSON.stringify({filters:{name:e},projection:["name","company","industry","fsBrandId"]})).then((function(t){_(!1),O(t.data.brands),t.data.brands.length||n(e)})).catch((function(e){_(!1),console.log("error in fetch results",e)}))}),500))},fullWidth:!0,onChange:function(e,t){"string"===typeof t||t&&t.inputValue||(w(t),n(t))},selectOnFocus:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:A,getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.name},renderOption:function(e,n){return(0,o.jsx)("li",(0,a.Z)((0,i.Z)({},e),{children:n.name}))},freeSolo:!0,renderInput:function(e){return(0,o.jsx)(l.Z,(0,a.Z)((0,i.Z)({},e),{placeholder:f,variant:"outlined",sx:{"&.MuiAutocomplete-inputRoot":{padding:"5.5px 4px 7.5px 6px"},"& .MuiInputBase-root":(0,i.Z)({paddingTop:0,paddingBottom:0,borderRadius:m},b?{backgroundColor:b}:{},y&&{height:y,display:"flex",alignItems:"center"})},error:Boolean(u||R),helperText:u||R,InputProps:(0,a.Z)((0,i.Z)({},e.InputProps),{endAdornment:(0,o.jsxs)(o.Fragment,{children:[k?(0,o.jsx)(d.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}},81145:function(e,n,t){"use strict";t.d(n,{Z:function(){return X}});var r,i=t(47568),a=t(26042),o=t(69396),s=t(97582),l=t(85893),u=t(67294),c=t(51233),d=t(15861),h=t(50135),p=t(79717),m=t(50480),g=t(36872),f=t(86886),x=t(69417),b=t(98456),v=t(86012),y=t.n(v),j=t(82580),Z=t(8499),w=t(69444),C=t(56815),q=t(57575),_=t(26159),S=t.n(_),A=function(e){var n=e.file,t=e.setFieldValue,r=e.label,i=e.errors,a=e.touched,o=(0,u.useRef)(null);return(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("input",{type:"file",name:"file",id:"agencyProposal",hidden:!0,ref:o,onChange:function(e){var n=e.target.files[0];n&&t("file",n)}}),(0,l.jsxs)(c.Z,{spacing:2,width:"100%",children:[(0,l.jsx)(d.Z,{color:"text.mid",variant:"subtitle2",lineHeight:"22px",children:r}),(0,l.jsxs)(c.Z,{className:S().btnContainer,children:[(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(x.Z,{variant:"outlined",startIcon:(0,l.jsx)(q.Z,{}),onClick:function(){var e;return null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.click()},className:S().uploadBtn,children:"Upload Files"}),a&&i&&(0,l.jsx)(C.Z,{className:S().errorText,children:i})]}),n&&(0,l.jsx)(c.Z,{className:S().fileNameLabelContainer,children:(0,l.jsx)(C.Z,{className:S().fileNameLabel,sx:{color:"grey.grey2"},children:n.name})})]})]})]})},O=function(e){var n=e.touched,t=e.errors,r=e.placeholder,i=e.name,a=e.value,o=e.handleChange;return(0,l.jsx)(h.Z,{value:a,onChange:o,name:i,size:"small",placeholder:r,sx:{"& .MuiInputBase-root":{minHeight:"40px",borderRadius:"8px",fontSize:"16px"}},error:n&&Boolean(t),helperText:n&&t})},M={inquiry:{queryObjective:"",showQueryObjectiveSelection:!0,showMediaAware:!0},leadMagnet:{queryObjective:"Advertising",showQueryObjectiveSelection:!1,showMediaAware:!0},parivartanLeadForm:{queryObjective:"Advertising",showQueryObjectiveSelection:!1,showMediaAware:!1},budgetEstimatorLeadForm:{queryObjective:"Advertising",showQueryObjectiveSelection:!1,showMediaAware:!1}},k=[{label:"Have an advertising requirement?",value:"Advertising"},{label:"Agency partnership with us",value:"Agency Connect"},{label:"List your media with us",value:"Media Listing"},{label:"Explore career opportunities",value:"Jobs/Career"}],N=t(77919),R=t(94054),L=t(18360),T=t(18972),I=function(e){var n=e.value,t=e.name,r=e.title,i=e.onChange,a=e.options,o=e.placeholder,s=void 0===o?"Select an option":o,u=e.touched,c=e.error;return(0,l.jsxs)(R.Z,{fullWidth:!0,error:Boolean(u&&c),children:[(0,l.jsx)(L.Z,{displayEmpty:!0,value:n,onChange:function(e){return i(e.target.value)},name:t,renderValue:function(e){if(""===e)return(0,l.jsx)(d.Z,{sx:{color:"#9EA6B4"},children:r||s});if("string"===typeof a[0])return(0,l.jsx)(d.Z,{color:"text.dark",children:e});var n=a.find((function(n){return n.value===e}));return n?(0,l.jsx)(d.Z,{color:"text.dark",children:n.label}):(0,l.jsx)(d.Z,{color:"text.dark",children:e})},fullWidth:!0,size:"small",sx:{borderRadius:"8px",minHeight:"40px","& .MuiSelect-select":{display:"flex",alignItems:"center"}},MenuProps:{PaperProps:{sx:{maxHeight:"200px","&::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"link.main",borderRadius:"2px"}}}},children:a.map((function(e,n){return"string"===typeof e?(0,l.jsx)(T.Z,{value:e,children:e},n):(0,l.jsx)(T.Z,{value:e.value,children:e.label},n)}))}),u&&c&&(0,l.jsx)(C.Z,{children:c})]})},B=t(5306),V=function(e){var n=e.onChange,t=e.selectedValues,r=e.error,c=e.touched,d=(0,u.useState)([]),p=d[0],m=d[1],g=(0,u.useRef)(null),f=(0,u.useState)(""),x=f[0],b=f[1],v=(0,u.useState)(!1),y=v[0],j=v[1],w=(0,u.useRef)(null),C=function(){var e=(0,i.Z)((function(e){var n,t;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:if(!e||!e.trim().length)return[2];r.label=1;case 1:return r.trys.push([1,3,4,5]),j(!0),[4,Z.Z.get("".concat("https://api.themediaant.com","/gapi/suggestions?name=").concat(encodeURIComponent(e)))];case 2:return n=r.sent(),m(n.data),[3,5];case 3:return t=r.sent(),console.error("Error fetching suggestions:",t),[3,5];case 4:return j(!1),[7];case 5:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){w.current&&(w.current.scrollTop=0)}),[p]),(0,l.jsx)(B.Z,{multiple:!0,fullWidth:!0,value:t,onInputChange:function(e,n,r){5!==t.length&&"clear"!==r&&(g.current&&clearTimeout(g.current),b(n),g.current=setTimeout((function(){return C(n)}),500))},loading:y,onChange:function(e,t){n(t),m([]),b("")},options:p,limitTags:2,getOptionLabel:function(e){return e&&(null===e||void 0===e?void 0:e.description)||""},noOptionsText:5===t.length?"Max 5 locations are allowed.":x.trim()?"No results found.":"Type to search.",size:"small",renderInput:function(e){return(0,l.jsx)(h.Z,(0,o.Z)((0,a.Z)({},e),{variant:"outlined",error:Boolean(c&&r),helperText:c&&r,placeholder:"Campaign locations *",inputProps:(0,o.Z)((0,a.Z)({},e.inputProps),{onKeyDown:function(e){"Enter"===e.key&&e.stopPropagation()}}),sx:{"& .MuiOutlinedInput-root":{minHeight:"40px",height:"auto",fontSize:"16px",display:"flex",alignItems:"center",paddingTop:0,paddingBottom:0,borderRadius:"8px"}}}))},filterOptions:function(e){return e},ListboxProps:{ref:w,style:{maxHeight:"300px",overflow:"auto"},sx:{"&::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"link.main",borderRadius:"2px"}}}})},F=t(51138),P=function(e){var n=e.onChange,t=e.placeholder,c=e.error,p=e.touched,m=e.selectedValues,g=(0,u.useState)([]),f=g[0],x=g[1],b=(0,u.useState)(!1),v=b[0],y=b[1],j=(0,u.useState)(""),Z=j[0],w=j[1],q=(0,u.useRef)(null),_=function(){var e=(0,i.Z)((function(e){var n,t,r;return(0,s.__generator)(this,(function(i){switch(i.label){case 0:if(!e||!e.trim().length)return[2];y(!0),i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,(0,F.Z)(e)];case 2:return n=i.sent(),t=n.map((function(e){return{_id:e._id,name:e.name,toolName:e.toolName}})),x(t),[3,5];case 3:return r=i.sent(),console.error("Error fetching media options:",r),[3,5];case 4:return y(!1),[7];case 5:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){q.current&&(q.current.scrollTop=0)}),[f]),(0,l.jsx)(B.Z,{multiple:!0,onInputChange:function(e,n,t){5!==m.length&&"clear"!==t&&(r&&clearTimeout(r),w(n),r=setTimeout((function(){return _(n)}),500))},onChange:function(e,t){t.length>5||(n(t),w("")),x([])},noOptionsText:5===m.length?"Max 5 medias are allowed.":Z.trim()?"No results found.":"Type to search.",options:f,getOptionLabel:function(e){return e&&(null===e||void 0===e?void 0:e.name)||""},value:m,isOptionEqualToValue:function(e,n){return e._id===n._id},loading:v,limitTags:2,size:"small",renderOption:function(e,n,t){return(0,u.createElement)("li",(0,o.Z)((0,a.Z)({},e),{key:"".concat(t.index),style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsx)(d.Z,{fontSize:"14px",children:n.name}),(0,l.jsx)(C.Z,{children:n.toolName})]}))},renderInput:function(e){return(0,l.jsx)(h.Z,(0,o.Z)((0,a.Z)({},e),{placeholder:t,error:Boolean(p&&c),helperText:p&&c,sx:{"& .MuiInputBase-root":{borderRadius:"8px",minHeight:"40px",height:"auto",fontSize:"16px"}}}))},filterOptions:function(e){return e},ListboxProps:{ref:q,style:{maxHeight:"200px",overflow:"auto"},sx:{"&::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"link.main",borderRadius:"2px"}}}})},E=t(41664),z=t.n(E),H=t(74231),W=t(64505),J=function(e){return H.Ry({name:H.Z_().trim().test("is-not-empty","Name is required",(function(e){return""!==e})).required("Name is required"),email:H.Z_().email("Must be a valid email").required("Email is required"),phone:H.Z_().matches(W.O,"Phone number is not valid").required("Phone number is required"),queryObjective:H.Z_().when([],{is:function(){var n;return null===(n=M[e])||void 0===n?void 0:n.showQueryObjectiveSelection},then:H.Z_().required("Query objective is required"),otherwise:H.Z_().notRequired()}),medias:H.IX().when(["queryObjective","isMediaAware"],{is:function(e,n){return"Advertising"===e&&n},then:H.IX().min(1,"Select at least one media").required("Media is required"),otherwise:H.IX().notRequired()}),productCategory:H.Z_().when(["queryObjective","isMediaAware"],{is:function(e,n){return"Advertising"===e&&!n},then:H.Z_().required("Please select product category"),otherwise:H.Z_().notRequired()}),campaignLocations:H.IX().when("queryObjective",{is:function(e){return"Advertising"===e},then:H.IX().min(1,"Please select at least one location").required("Please select a location"),otherwise:H.IX().notRequired()}),budget:H.Z_().when("queryObjective",{is:function(e){return"Advertising"===e},then:H.Z_().required("Budget is required"),otherwise:H.Z_().notRequired()}),brand:H.nK().when(["queryObjective","isMediaAware"],{is:function(e,n){return"Advertising"===e&&!n},then:H.nK().test("is-not-empty","Please select a valid brand",(function(e){return"string"===typeof e&&e.trim().length>0||"object"===typeof e&&null!==e&&Object.keys(e).length>0})).required("Brand is required"),otherwise:H.nK().notRequired()}),message:H.Z_().when("queryObjective",{is:function(e){return"Advertising"===e},then:H.Z_().required("Message is required").min(100,"Message must be at least 100 characters"),otherwise:H.Z_().notRequired()}),agencyName:H.Z_().when("queryObjective",{is:function(e){return"Agency Connect"===e},then:H.Z_().trim().test("is-not-empty","Agency name is required",(function(e){return""!==e})).required("Agency name is required"),otherwise:H.Z_().notRequired()}),file:H.nK().when("queryObjective",{is:function(e){return"Jobs/Career"===e},then:H.nK().required("CV is required"),otherwise:H.nK().notRequired()}),jobRole:H.Z_()})},K={name:"",email:"",phone:"",message:"",queryObjective:"",agencyName:"",file:null,jobRole:"",tools:[],adTimeLine:"",budget:"",brand:"",isMediaAware:!0,productCategory:"",medias:[],campaignLocations:[]},X=function(e){var n,t=e.onSubmit,r=e.isLoading,v=e.heading,C=e.formType,q=e.defaultFormValues,_=(0,u.useState)(0),S=_[0],R=_[1],L=function(){var e=(0,i.Z)((function(e,n){var r,i,l,u;return(0,s.__generator)(this,(function(s){return r=e.queryObjective,i=e.isMediaAware,l=e.file,u=JSON.parse(JSON.stringify(e)),"Advertising"===r&&i?(delete u.productCategory,delete u.brand):"Advertising"!==r||i||delete u.medias,u.phone=u.phone.toString(),t((0,o.Z)((0,a.Z)({},u),{file:l}),n),[2]}))}));return function(n,t){return e.apply(this,arguments)}}(),T=(0,j.TA)({initialValues:K,onSubmit:function(e,n){var t=n.resetForm;return L(e,t)},validationSchema:J(C)}),B=T.values,F=T.errors,E=T.touched,H=T.handleChange,W=T.setFieldValue;return(0,u.useEffect)((function(){if(C){var e=M[C].queryObjective;T.setFieldValue("queryObjective",e)}q&&Object.keys(q).length&&(T.setFieldValue("name",q.name),T.setFieldValue("email",q.email),T.setFieldValue("phone",q.phone),T.setFieldValue("medias",q.medias),T.setFieldValue("campaignLocations",q.campaignLocations),T.setFieldValue("message",q.message),q.budget&&("number"===typeof q.budget?T.setFieldValue("budget",function(e){switch(!0){case e>=0&&e<1e5:return"0-1 Lakh";case e>=1e5&&e<5e5:return"1-5 Lakhs";case e>=5e5&&e<25e5:return"5-25 Lakh";case e>=25e5:return"25+ Lakhs";default:return"Yet to decide"}}(q.budget)):"string"===typeof q.budget&&N.X1.includes(q.budget)&&T.setFieldValue("budget",q.budget)))}),[C]),(0,l.jsxs)(c.Z,{spacing:"20px",children:[(0,l.jsx)(c.Z,{spacing:{xs:3,md:4},children:(0,l.jsx)(d.Z,{variant:"h2",sx:{fontSize:{xs:"18px",md:"28px"},fontWeight:"semiBold"},textAlign:"center",children:v})}),(0,l.jsx)("form",{onSubmit:T.handleSubmit,children:(0,l.jsxs)(c.Z,{className:y().itemSpacing,children:[(0,l.jsx)(O,{touched:E.name,errors:F.name,placeholder:"Your Name *",name:"name",value:B.name,handleChange:H}),(0,l.jsx)(O,{touched:E.email,errors:F.email,placeholder:"Your Email Id *",name:"email",value:B.email,handleChange:H}),(0,l.jsx)(h.Z,{value:B.phone,error:E.phone&&Boolean(F.phone),helperText:E.phone&&F.phone,placeholder:"Your Mobile Number *",name:"phone",onChange:function(e){var n=e.target.value;(Number(n)>=0||""===n)&&H(e)},size:"small",type:"number",sx:{"& .MuiInputBase-root":{minHeight:"40px",borderRadius:"8px",fontSize:"16px"},"& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":{WebkitAppearance:"none",margin:0}}}),M[C].showQueryObjectiveSelection&&(0,l.jsx)(I,{value:(null===B||void 0===B?void 0:B.queryObjective)||"",error:F.queryObjective,touched:E.queryObjective,name:"queryObjective",title:"Requirement",onChange:function(e){var n;n=e,T.setValues((0,o.Z)((0,a.Z)({},T.values),{queryObjective:n,message:"",adTimeLine:"",agencyName:"",file:null,jobRole:"",tools:[],budget:"",brand:"",medias:[],campaignLocations:[],productCategory:""})),R(0)},options:k}),"Advertising"===B.queryObjective&&(0,l.jsxs)(c.Z,{className:y().itemSpacing,children:[M[C].showMediaAware&&(0,l.jsxs)(p.Z,{row:!0,onChange:function(e){W("isMediaAware","true"===e.target.value)},defaultValue:!0,children:[(0,l.jsx)(m.Z,{value:!0,control:(0,l.jsx)(g.Z,{}),label:(0,l.jsx)(d.Z,{color:"#172B4D",fontSize:{xs:"12px",md:"14px"},fontWeight:!0===B.isMediaAware?500:"normal",children:"I\u2019m aware of the Media"})}),(0,l.jsx)(m.Z,{value:!1,control:(0,l.jsx)(g.Z,{}),label:(0,l.jsx)(d.Z,{color:"#172B4D",fontSize:{xs:"12px",md:"14px"},fontWeight:!1===B.isMediaAware?500:"normal",children:"I\u2019m not aware of the Media"})})]}),B.isMediaAware?(0,l.jsx)(P,{selectedValues:B.medias,touched:!!E.medias,error:F.medias,placeholder:"Select up to 5 Medias* (eg. Hotstar, RedFM, Inshorts, India Today etc.)",onChange:function(e){return W("medias",e)}}):(0,l.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(I,{touched:E.productCategory,error:F.productCategory,value:(null===B||void 0===B?void 0:B.productCategory)||"",name:"productCategory",title:"Product Category *",onChange:function(e){return W("productCategory",e)},options:N.EZ})}),(0,l.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(w.Z,{height:"40px",borderRadius:"8px",placeholder:"Brand Name *",errorMessage:!!E.brand&&F.brand,defaultValue:(null===(n=B.brand)||void 0===n?void 0:n.name)||"",authorize:!1,apiService:Z.Z,onSelect:function(e){var n;n=Array.isArray(e)?e[0]||{}:e||"",W("brand",n||"")}})})]}),(0,l.jsxs)(f.ZP,{container:!0,spacing:{xs:3,md:2},children:[(0,l.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(V,{selectedValues:B.campaignLocations||[],onChange:function(e){return W("campaignLocations",e)},touched:!!E.campaignLocations,error:F.campaignLocations})}),(0,l.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(I,{touched:!!E.budget,error:F.budget,value:(null===B||void 0===B?void 0:B.budget)||"",name:"budget",title:"Campaign Budget *",onChange:function(e){return W("budget",e)},options:N.X1})})]}),(0,l.jsxs)(c.Z,{spacing:1,children:[(0,l.jsx)(h.Z,{value:B.message,onChange:function(e){H(e),R(e.target.value.trim().length)},name:"message",id:"message",sx:{width:"100%","& .MuiInputBase-root":{borderRadius:"8px",height:100}},placeholder:"Advertising Requirement *",multiline:!0,rows:3,variant:"outlined",error:E.message&&Boolean(F.message)}),(0,l.jsxs)(c.Z,{direction:"row",justifyContent:"space-between",children:[(0,l.jsx)(d.Z,{sx:{fontSize:"12px",color:"error.main"},children:E.message&&F.message}),(0,l.jsxs)(d.Z,{sx:{fontSize:"12px"},children:[S,"/",100]})]}),(0,l.jsxs)(d.Z,{fontSize:"14px",children:["By submitting this form, I agree to The Media Ant's\xa0",(0,l.jsxs)("span",{style:{fontWeight:500},children:[(0,l.jsx)(z(),{href:"/privacy-policy",children:(0,l.jsx)("a",{target:"_blank",style:{color:"inherit"},children:"privacy policy"})})," "]}),"&"," ",(0,l.jsx)("span",{style:{fontWeight:500},children:(0,l.jsx)(z(),{style:{color:"inherit",textDecorationColor:"inherit"},href:"/terms-and-conditions",children:(0,l.jsx)("a",{target:"_blank",style:{color:"inherit"},children:"terms of service."})})})]})]})]}),"Agency Connect"===B.queryObjective&&(0,l.jsxs)(c.Z,{className:y().itemSpacing,children:[(0,l.jsx)(h.Z,{value:B.agencyName,onChange:H,name:"agencyName",id:"agencyName",placeholder:"Enter Agency Name *",variant:"outlined",size:"small",sx:{"& .MuiInputBase-root":{minHeight:"40px",fontSize:"16px",borderRadius:"8px"}},error:E.agencyName&&Boolean(F.agencyName),helperText:E.agencyName&&F.agencyName}),(0,l.jsx)(A,{setFieldValue:W,file:B.file,label:"Agency Proposal"})]}),"Media Listing"===B.queryObjective&&(0,l.jsx)(A,{setFieldValue:W,file:B.file,label:"Media Kit"}),"Jobs/Career"===B.queryObjective&&(0,l.jsxs)(c.Z,{className:y().itemSpacing,children:[(0,l.jsx)(O,{touched:E.jobRole,errors:F.jobRole,placeholder:"Enter Job Role",name:"jobRole",value:B.jobRole,handleChange:H}),(0,l.jsx)(A,{touched:E.file,errors:F.file,setFieldValue:W,file:B.file,label:"CV *"})]}),(0,l.jsxs)(x.Z,{variant:"contained",type:"submit",disabled:r,className:y().submitBtn,children:["Send Message",r&&(0,l.jsx)(b.Z,{size:12,sx:{color:"primary.main",marginLeft:"4px"}})]})]})})]})}},64505:function(e,n,t){"use strict";t.d(n,{L:function(){return i},O:function(){return r}});var r=/^[6-9]\d{9}$/,i=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},77919:function(e,n,t){"use strict";t.d(n,{EZ:function(){return a},S0:function(){return i},X1:function(){return r}});var r=["0-1 Lakh","1-5 Lakhs","5-25 Lakh","25+ Lakhs","Yet to decide"],i=["Within a week","Within a month","After 30 days","Yet to decide"],a=["Agriculture","Automobile","Education & Skill","Engineering","Entertainment","Event","Fashion & Lifestyle","Finance","Fitness & Health","FMCG","Food & Restaurant","Healthcare","Home Decor & Construction","Hospitality","IT Product & Services","Real Estate","Services","Shopping & Retail","Social Enterprise & Trust","Transportation & Logistics","Travel & Tourism","Others"]},86012:function(e){e.exports={submitBtn:"lead-form_submitBtn__efACa",subHeaderText:"lead-form_subHeaderText__A8OFJ",itemSpacing:"lead-form_itemSpacing___1kqF"}},26159:function(e){e.exports={btnContainer:"upload-file_btnContainer__lPq_n",uploadBtn:"upload-file_uploadBtn__6m0VU",errorText:"upload-file_errorText__adL7i",fileNameLabelContainer:"upload-file_fileNameLabelContainer__YGef_",fileNameLabel:"upload-file_fileNameLabel__4gPJp"}}}]);