import{_ as i,r as t,o as c,c as d,w as o,d as s,h as a,f as p}from"./index.b7bd6ca6.js";const r={name:"uploadFile"},_=a("\u9009\u62E9\u6587\u4EF6"),u=a("\u4E0A\u4F20"),f=p("div",{slot:"tip",class:"el-upload__tip"},"xls/xlsx\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC720M",-1);function m(e,x,h,v,k,C){const l=t("el-button"),n=t("el-upload");return c(),d(n,{action:"uploadfile",ref:"upload","on-remove":e.onRemoveFile,"auto-upload":!1,multiple:"",limit:2,"on-exceed":e.onFileExceed,"file-list":e.fileList},{default:o(()=>[s(l,{slot:"trigger",size:"small",type:"primary"},{default:o(()=>[_]),_:1}),s(l,{style:{"margin-left":"10px"},size:"small",type:"success",onClick:e.onClickUploadBox},{default:o(()=>[u]),_:1},8,["onClick"]),f]),_:1},8,["on-remove","on-exceed","file-list"])}var B=i(r,[["render",m]]);export{B as default};
