(this["webpackJsonppalette-town"]=this["webpackJsonppalette-town"]||[]).push([[0],{193:function(e,a,t){e.exports=t.p+"static/media/bg.7319f502.svg"},217:function(e,a,t){e.exports=t(404)},222:function(e,a,t){},232:function(e,a,t){},404:function(e,a,t){"use strict";t.r(a);var n,o=t(0),r=t.n(o),l=t(8),c=t.n(l),i=t(44),s=(t(222),t(89)),m=t(20),d=t(21),h=t(9),u=t(25),p=t(24),g=t(28),b=t(468),f=t(466),v=t(407),w=t(12),y=t(190),C=t(17),S=t.n(C),E=t(50),k=t.n(E),x=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1399.98px"}[e],")")},j={PaletteCard:(n={width:"20%",height:function(e){return e.showMultiColorPalette?"25%":"50%"},display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px","&:hover button":{opacity:"1"}},Object(w.a)(n,x("lg"),{width:"25%",height:function(e){return e.showMultiColorPalette?"20%":"33.3333%"}}),Object(w.a)(n,x("md"),{width:"50%",height:function(e){return e.showMultiColorPalette?"10%":"20%"}}),Object(w.a)(n,x("xs"),{width:"100%",height:function(e){return e.showMultiColorPalette?"5%":"10%"}}),n),paletteContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyText:{color:function(e){return k()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return k()(e.background).luminance()<=.6?"white":"black"}},seeMore:{color:function(e){return k()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase",cursor:"pointer"},copyButton:{color:function(e){return k()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",cursor:"pointer",opacity:"0"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMsg:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"aliceblue","& h1":Object(w.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.3)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},x("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2.5rem",fontWeight:"100"}},showMsg:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.285s"}},O=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={copied:!1},n.changeCopyState=n.changeCopyState.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,n=e.colorId,o=e.paletteId,l=e.showMultiColorPalette,c=e.classes,s=this.state.copied;return r.a.createElement("div",{style:{background:t},className:c.PaletteCard},r.a.createElement("div",{style:{background:t},className:S()(c.copyOverlay,Object(w.a)({},c.showOverlay,s))}),r.a.createElement("div",{className:S()(c.copyMsg,Object(w.a)({},c.showMsg,s))},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:c.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:c.paletteContent},r.a.createElement("span",{className:c.colorName},a)),r.a.createElement(y.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("button",{className:c.copyButton},"Copy"))),l&&r.a.createElement(i.b,{to:"/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:c.seeMore},"MORE")))}}]),t}(o.Component),N=Object(v.a)(j)(O),P=t(465),F=t(451),B=t(467),D=t(452),I=t(111),A=t.n(I),T=t(199),L={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(w.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"'Roboto', sans-serif",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},x("xs"),{display:"none"}),slider:Object(w.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"rgb(0, 177, 177)",outline:"none",border:"2px rgb(0, 177, 177)",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},x("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem; "}},M=(t(231),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={format:"hex",open:!1},n.handleFormatChange=n.handleFormatChange.bind(Object(h.a)(n)),n.closeSnackbar=n.closeSnackbar.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,n=e.showSlider,o=e.classes,l=this.state,c=l.format,s=l.open;return r.a.createElement("header",{className:o.Navbar},r.a.createElement("div",{className:o.logo},r.a.createElement(i.b,{to:"/"},"Palette Town")),n&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:o.slider},r.a.createElement(T.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:o.selectContainer},r.a.createElement(P.a,{value:c,onChange:this.handleFormatChange},r.a.createElement(F.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(F.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(F.a,{value:"rgba"},"RGBA - rgba(255,255,255)"))),r.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:3e3,message:r.a.createElement("span",{id:"msg-id"},"Format Changed To: ",c.toUpperCase()),ContentProps:{"aria-describedby":"msg-id"},onClose:this.closeSnackbar,action:[r.a.createElement(D.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(A.a,null))]}))}}]),t}(o.Component)),G=Object(v.a)(L)(M);var R,z,H,U=Object(v.a)({PaletteFooter:{backgroundColor:"whitesmoke",height:"4vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,n=e.classes;return r.a.createElement("footer",{className:n.PaletteFooter},a,r.a.createElement("span",{className:n.emoji},t))})),W={Palette:{height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden scroll",scrollbarWidth:"none"},paletteColors:{height:"90%"},goBack:(R={width:"20%",height:"50%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px",opacity:"1",backgroundColor:"black","& a":{color:"whitesmoke",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",cursor:"pointer"}},Object(w.a)(R,x("lg"),{width:"25%",height:"33.3333%"}),Object(w.a)(R,x("md"),{width:"50%",height:"20%"}),Object(w.a)(R,x("xs"),{width:"100%",height:"10%"}),R)},V=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={level:500,format:"hex"},n.changeLevel=n.changeLevel.bind(Object(h.a)(n)),n.changeFormat=n.changeFormat.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,a=this.props.palette,t=a.colors,n=a.paletteName,o=a.emoji,l=a.id,c=this.state,i=c.level,s=c.format,m=t[i].map((function(e){return r.a.createElement(N,{background:e[s],name:e.name,key:e.id,colorId:e.id,paletteId:l,showMultiColorPalette:!0})}));return r.a.createElement("div",{className:e.Palette},r.a.createElement(G,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showSlider:!0}),r.a.createElement("div",{className:e.paletteColors},m),r.a.createElement(U,{paletteName:n,emoji:o}))}}]),t}(o.Component),q=Object(v.a)(W)(V),J=t(469),Y=t(453),K=t(454),_=t(450),Q=t(405),X=t(455),$=t(456),Z=t(194),ee=t.n(Z),ae=t(138),te=t.n(ae),ne=t(139),oe=t.n(ne),re=t(112),le=t.n(re),ce=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).deletePalette=n.deletePalette.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,n=e.emoji,o=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniPalette,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(le.a,{className:a.deleteIcon,onClick:this.deletePalette}),r.a.createElement("div",{className:a.miniPaletteColors},o),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},n)))}}]),t}(o.PureComponent),ie=Object(v.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},miniPaletteColors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniPalette:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0,transition:"all 0.4s ease-in-out"}})(ce),se=t(193),me={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{backgroundColor:"#324b4b",backgroundImage:"url(".concat(t.n(se).a,")"),backgroundAttachemnt:"fixed",backgroundSize:"cover",backgroundPosition:"center",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflow:"scroll",scrollbarWidth:"none"},title:{fontSize:"2rem"},container:(z={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(w.a)(z,x("xl"),{width:"80%"}),Object(w.a)(z,x("xs"),{width:"75%"}),z),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"whitesmoke",alignItems:"center","& a":{color:"whitesmoke"}},palettes:(H={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.1rem"},Object(w.a)(H,x("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(w.a)(H,x("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),H)},de=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={openDeleteDialog:!1,deletingId:""},n.openDialog=n.openDialog.bind(Object(h.a)(n)),n.closeDialog=n.closeDialog.bind(Object(h.a)(n)),n.handleDelete=n.handleDelete.bind(Object(h.a)(n)),n.goToPalette=n.goToPalette.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,n=a.classes,o=this.state.openDeleteDialog;return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.container},r.a.createElement("nav",{className:n.nav},r.a.createElement("h1",{className:n.title},"Palette List"),r.a.createElement(i.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(b.a,{className:n.palettes},t.map((function(a){return r.a.createElement(f.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(ie,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(Y.a,{open:o,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(K.a,{id:"delete-dialog-title"},"Are You Sure?"),r.a.createElement(_.a,null,r.a.createElement(Q.a,{button:!0,onClick:this.handleDelete},r.a.createElement(X.a,null,r.a.createElement(J.a,{style:{backgroundColor:te.a[100],color:te.a[600]}},r.a.createElement(ee.a,null))),r.a.createElement($.a,{primary:"Delete"})),r.a.createElement(Q.a,{button:!0,onClick:this.closeDialog},r.a.createElement(X.a,null,r.a.createElement(J.a,{style:{backgroundColor:oe.a[100],color:oe.a[600]}},r.a.createElement(A.a,null))),r.a.createElement($.a,{primary:"Cancel"})))))}}]),t}(o.Component),he=Object(v.a)(me)(de),ue=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e))._shades=n.getColorShades(n.props.palette,n.props.colorId),n.state={format:"hex"},n.changeFormat=n.changeFormat.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"getColorShades",value:function(e,a){var t=[],n=e.colors;for(var o in n)t=t.concat(n[o].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.format,t=this.props.palette,n=t.paletteName,o=t.emoji,l=t.id,c=this._shades.map((function(e){return r.a.createElement(N,{key:e.name,name:e.name,background:e[a],showMultiColorPalette:!1})}));return r.a.createElement("div",{className:e.Palette},r.a.createElement(G,{handleChange:this.changeFormat,showSlider:!1}),r.a.createElement("div",{className:e.paletteColors},c,r.a.createElement("div",{className:e.goBack},r.a.createElement(i.b,{to:"/palette/".concat(l)},"GO BACK"))),r.a.createElement(U,{paletteName:n,emoji:o}))}}]),t}(o.Component),pe=Object(v.a)(W)(ue);t(232);var ge,be=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},fe=t(6),ve=t(470),we=t(79),ye=t(464),Ce=t(198),Se=t.n(Ce),Ee=t(460),ke=t(75),xe=t(461),je=t(462),Oe=t(463),Ne=t(196),Pe=t.n(Ne),Fe=t(60),Be=t(459),De=t(457),Ie=t(458),Ae=t(200),Te=(t(241),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={stage:"saveForm",newPaletteName:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.changeStage=n.changeStage.bind(Object(h.a)(n)),n.savePalette=n.savePalette.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Fe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"changeStage",value:function(){this.setState({stage:"emojiForm"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,n=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(Y.a,{open:"emojiForm"===t,onClose:n},r.a.createElement(K.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(Ae.a,{title:"Tone Options \u27a2",onSelect:this.savePalette})),r.a.createElement(Y.a,{open:"saveForm"===t,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(K.a,{id:"form-dialog-title"},"Enter Palette Name"),r.a.createElement(Fe.ValidatorForm,{onSubmit:this.changeStage},r.a.createElement(De.a,null,r.a.createElement(Ie.a,null,"Please name your new palette. Make sure it is a unique name!"),r.a.createElement(Fe.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already exists!"]})),r.a.createElement(Be.a,null,r.a.createElement(Ee.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(Ee.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(o.Component)),Le=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(w.a)({marginRight:"1rem"},x("xs"),{marginRight:"0.5rem"}),btn:Object(w.a)({margin:"0 0.5rem"},x("xs"),{margin:"0 0.2",padding:"0.2rem"})}},Me=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={newPaletteName:"",formShowing:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.showForm=n.showForm.bind(Object(h.a)(n)),n.hideForm=n.hideForm.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,n=e.palettes,o=e.handleSubmit,l=e.handleDrawerOpen,c=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(xe.a,null),r.a.createElement(je.a,{position:"fixed",color:"default",className:S()(a.appBar,Object(w.a)({},a.appBarShift,t))},r.a.createElement(Oe.a,{disableGutters:!t},r.a.createElement(D.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:S()(a.menuButton,t&&a.hide)},r.a.createElement(Pe.a,null)),r.a.createElement(we.a,{variant:"h6",color:"inherit",noWrap:!0},"Palette Lab")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(i.b,{to:"/"},r.a.createElement(Ee.a,{className:a.btn,variant:"contained",color:"secondary"},"Go Back")),r.a.createElement(Ee.a,{className:a.btn,variant:"contained",color:"primary",onClick:this.showForm},"Save Palette"))),c&&r.a.createElement(Te,{palettes:n,handleSubmit:o,hideForm:this.hideForm}))}}]),t}(o.Component),Ge=Object(fe.a)(Le,{withTheme:!0})(Me),Re=t(197),ze={picker:{width:"100% !important",marginTop:"2rem"},addSwatch:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},swatchNameInput:{width:"100%",height:"70px"}},He=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={currentSwatch:"teal",newSwatchName:""},n.updateCurrentSwatch=n.updateCurrentSwatch.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Fe.ValidatorForm.addValidationRule("isSwatchNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Fe.ValidatorForm.addValidationRule("isSwatchUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentSwatch}))}))}},{key:"updateCurrentSwatch",value:function(e){this.setState({currentSwatch:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentSwatch,name:this.state.newSwatchName};this.props.addNewSwatch(e),this.setState({newSwatchName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,n=this.state,o=n.currentSwatch,l=n.newSwatchName;return r.a.createElement("div",null,r.a.createElement(Re.ChromePicker,{color:o,onChangeComplete:this.updateCurrentSwatch,className:t.picker}),r.a.createElement(Fe.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Fe.TextValidator,{className:t.swatchNameInput,placeholder:"Swatch Name",value:l,name:"newSwatchName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isSwatchNameUnique","isSwatchUnique"],errorMessages:["Enter a name!","Name already exists!","Swatch already used!"]}),r.a.createElement(Ee.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addSwatch,style:{backgroundColor:a?"grey":o}},a?"Palette Full":"Add Swatch")))}}]),t}(o.Component),Ue=Object(fe.a)(ze)(He),We={root:(ge={width:"20%",height:"25%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-5.5px",cursor:"pointer","&:hover svg":{color:"whitesmoke",transform:"scale(1.5)"}},Object(w.a)(ge,x("lg"),{width:"25%",height:"20%"}),Object(w.a)(ge,x("md"),{width:"50%",height:"10%"}),Object(w.a)(ge,x("sm"),{width:"100%",height:"5%"}),ge),swatchContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return k()(e.color).luminance()<=.6?"whitesmoke":"black"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Ve=Object(ke.b)((function(e){var a=e.classes,t=e.name,n=e.color,o=e.handleClick;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.swatchContent},r.a.createElement("span",null,t),r.a.createElement(le.a,{className:a.deleteIcon,onClick:o})))})),qe=Object(v.a)(We)(Ve),Je=Object(ke.a)((function(e){var a=e.colors,t=e.removeSwatch;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(qe,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),Ye=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83d\udc28",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ke=t(140),_e=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Ke.a)(Object(Ke.a)({width:"100%",display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},btns:{width:"100%"},btn:{width:"50%"}}},Qe=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;n.setState((function(e){var n=e.colors;return{colors:Object(ke.c)(n,a,t)}}))},n.state={open:!0,colors:Ye[0].colors},n.addNewSwatch=n.addNewSwatch.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.removeSwatch=n.removeSwatch.bind(Object(h.a)(n)),n.clearSwatches=n.clearSwatches.bind(Object(h.a)(n)),n.addRandomSwatch=n.addRandomSwatch.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"addNewSwatch",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newSwatchName:""})}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeSwatch",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"clearSwatches",value:function(){this.setState({colors:[]})}},{key:"addRandomSwatch",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),n=!0;n;)e=Math.floor(Math.random()*t.length),a=t[e],n=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxSwatches,n=e.palettes,o=this.state,l=o.open,c=o.colors,i=c.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(Ge,{open:l,palettes:n,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(ve.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(D.a,{onClick:this.handleDrawerClose},r.a.createElement(Se.a,null))),r.a.createElement(ye.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(we.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.btns},r.a.createElement(Ee.a,{className:a.btn,variant:"contained",color:"secondary",onClick:this.clearSwatches},"Clear Palette"),r.a.createElement(Ee.a,{className:a.btn,variant:"contained",color:"primary",onClick:this.addRandomSwatch,disabled:i},"Random Swatch")),r.a.createElement(Ue,{paletteIsFull:i,addNewSwatch:this.addNewSwatch,colors:c}))),r.a.createElement("main",{className:S()(a.content,Object(w.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Je,{colors:c,removeSwatch:this.removeSwatch,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(o.Component);Qe.defaultProps={maxSwatches:20};var Xe=Object(fe.a)(_e,{withTheme:!0})(Qe),$e=t(141),Ze=[50,100,200,300,400,500,600,700,800,900];function ea(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},n=Object($e.a)(Ze);try{for(n.s();!(a=n.n()).done;){var o=a.value;t.colors[o]=[]}}catch(h){n.e(h)}finally{n.f()}var r,l,c,i=Object($e.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)t.colors[Ze[d]].push({name:"".concat(s.name," ").concat(Ze[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:k()(m[d]).css(),rgba:k()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return t}var aa=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(m.a)(this,t),n=a.call(this,e);var o=JSON.parse(window.localStorage.getItem("palettes"));return n.state={palettes:o||Ye},n.savePalette=n.savePalette.bind(Object(h.a)(n)),n.findPalette=n.findPalette.bind(Object(h.a)(n)),n.deletePalette=n.deletePalette.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{render:function(a){var t=a.location;return r.a.createElement(b.a,null,r.a.createElement(f.a,{key:t.key,classNames:"page",timeout:350},r.a.createElement(g.c,{location:t},r.a.createElement(g.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(be,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(be,null,r.a.createElement(Xe,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(be,null,r.a.createElement(q,{palette:ea(e.findPalette(a.match.params.id))}))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(be,null,r.a.createElement(pe,{colorId:a.match.params.colorId,palette:ea(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(g.a,{render:function(a){return r.a.createElement(be,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[217,1,2]]]);
//# sourceMappingURL=main.2180faa8.chunk.js.map