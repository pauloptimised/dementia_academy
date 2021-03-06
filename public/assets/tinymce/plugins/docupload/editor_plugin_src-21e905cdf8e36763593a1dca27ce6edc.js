/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
!function(){tinymce.PluginManager.requireLangPack("docupload"),tinymce.create("tinymce.plugins.DocUploadPlugin",{init:function(e,t){e.addCommand("mceDocUpload",function(){e.windowManager.open({file:t+"/dialog.htm",width:320+parseInt(e.getLang("docupload.delta_width",0)),height:320+parseInt(e.getLang("docupload.delta_height",0)),inline:1},{plugin_url:t,some_custom_arg:"custom arg"})}),e.addButton("docupload",{title:"docupload.desc",cmd:"mceDocUpload",image:t+"/img/upload.gif"}),e.onNodeChange.add(function(e,t,i){t.setActive("docupload","IMG"==i.nodeName)})},createControl:function(){return null},getInfo:function(){return{longname:"Document Upload Plugin",author:"eskimosoup (nb)",authorurl:"http://www.eskimosoup.co.uk",infourl:"http://www.eskimosoup.co.uk",version:"1.0"}}}),tinymce.PluginManager.add("docupload",tinymce.plugins.DocUploadPlugin)}();