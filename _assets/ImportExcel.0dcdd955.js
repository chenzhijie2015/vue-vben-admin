import{a as e,r as t,i as s,o as i,j as o,k as r,w as a,ah as d,aV as n,p as m}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.e19633cb.js";import"./index.90de1e74.js";import"./omit.439d1869.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import"./index.6b93ba53.js";import"./index.bf0e8280.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.5429caf9.js";import"./UpOutlined.5b0a5c28.js";import"./LeftOutlined.bfe820e8.js";import"./DownOutlined.3a561222.js";import"./index.94d80465.js";import"./index.f8fbd3c1.js";import"./index.d5fe47b2.js";import"./zh_CN.0242bd16.js";import"./index.4e4bcd90.js";import"./index.8f50292b.js";import"./CaretDownFilled.48ea7d98.js";import"./CheckOutlined.f93c980e.js";import"./CloseOutlined.06d38e20.js";import{s as c}from"./EditTableHeaderIcon.fb45be89.js";import"./index.e727506c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./functional.696d7325.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import"./uuid.40269c00.js";import"./download.5b6067ac.js";import"./useForm.cd7e42d8.js";import"./useFullScreen.8bd76ed4.js";import"./index.eedf2b72.js";import{a as p}from"./index.4c51ae9c.js";var l=e({components:{BasicTable:c,ImportExcel:p},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:i,meta:{sheetName:o}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:i,columns:r})}},tableListRef:e}}});const u={class:"m-4"},j=m("导入Excel");l.render=function(e,t,m,c,p,l){const f=s("a-button"),b=s("_self"),x=s("BasicTable");return i(),o("div",u,[r(b,{onSuccess:e.loadDataSuccess},{default:a((()=>[r(f,{class:"m-3"},{default:a((()=>[j])),_:1})])),_:1},8,["onSuccess"]),(i(!0),o(d,null,n(e.tableListRef,((e,t)=>(i(),o(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])};export default l;