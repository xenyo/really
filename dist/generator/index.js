var e,t=require("fs");e={animation:["none"],background:["none"],border:["none"],"box-shadow":["none"],"box-sizing":["border-box","content-box"],cursor:["auto","default","none","pointer"],outline:["none"],"text-overflow":["clip","ellipsis"],"user-select":["all","auto","contain","none","text"],margin:[0,"auto"],"margin-bottom":[0,"auto"],"margin-left":[0,"auto"],"margin-right":[0,"auto"],"margin-top":[0,"auto"],padding:[0],"padding-bottom":[0],"padding-left":[0],"padding-right":[0],"padding-top":[0],color:["black","white"],opacity:[0,1],display:["block","flex","flow-root","grid","inline","inline-block","inline-flex","inline-grid","list-item","none","table"],"flex-direction":["column","column-reverse","row","row-reverse"],"flex-wrap":["wrap","nowrap"],"flex-shrink":[0,1],"flex-grow":[0,1],order:[0,1,2,3],"justify-content":["center","end","left","normal","right","space-around","space-between","space-evenly","start","stretch"],"align-content":["baseline","center","end","normal","space-around","space-between","space-evenly","start","stretch"],"align-items":["normal","stretch","center","start","end","baseline"],"align-self":["auto","normal","center","start","end"],gap:[0],"row-gap":[0],"column-gap":[0],"font-style":["italic","normal","oblique"],"font-weight":[100,200,300,400,500,600,700,800,900,"bold","bolder","lighter","normal"],"object-fit":["contain","cover","fill","none","scale-down"],"list-style-position":["inside","outside"],"list-style-type":["circle","decimal","disc","none","square"],all:["initial","inherit","unset","revert"],top:[0,"50%","100%"],left:[0,"50%","100%"],right:[0,"50%","100%"],bottom:[0,"50%","100%"],inset:[0],float:["none","left","right"],clear:["none","left","right","both"],position:["static","relative","absolute","fixed","sticky"],"z-index":[0,1,2,3],transform:["none"],"border-collapse":["collapse","separate"],"border-spacing":[0],"vertical-align":["baseline","sub","super","text-top","text-bottom","middle","top","bottom"],"letter-spacing":["normal"],"overflow-wrap":["normal","break-word","anywhere"],"text-align":["start","end","justify","left","right","center"],"text-indent":[0,"100%"],"white-space":["normal","nowrap","pre","pre-wrap","pre-line"],"text-decoration":["none","solid","double","dotted","dashed","wavy"],"text-decoration-line":["none","underline","overline","line-through"],"text-shadow":["none"],"backface-visibility":["hidden","visible"],perspective:["none"],transition:["none"],direction:["ltr","rtl"],"writing-mode":["horizontal-tb","vertical-rl","vertical-lr"],"text-orientation":["mixed","upright"],"backdrop-filter":["none"],filter:["none"]};const n=Object.entries(e).map((([e,t])=>t.map((t=>{const n=t.toString().replace(" ","-").replace(/([^0-9a-zA-Z_-])/,"\\$1");return[`.${e}-${n} { ${e}: ${t}; }`,`.${e}-${n}\\! { ${e}: ${t} !important; }`].join("\n")})).join("\n"))).join("\n");t.writeFileSync("dist/generator/literally.css",n);
//# sourceMappingURL=index.js.map
