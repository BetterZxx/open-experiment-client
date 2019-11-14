
export const experimentType = {
'1':'科研',
'2':'科技活动',
'3':'自选课题',
'4':'计算机应用',
'5':'人文素质'}
export const openType = {
  '1':'公开',
  '2':'不公开',
  '3':'部分公开',
}
export const suggestGroupType = {
  '1':'A组-石工地勘',
  '2':'B组-化工材料',
  '3':'C组-机械力学',
  '4':'E组-软件与数学',
  '5':'F组-经管法艺体人文'}
export const operationType = ['同意','拒绝','上报','修改']
export const roleNames={
  '0':'超级管理员',
  '1':'学生',
  '2':'项目组长',
  '3':'指导老师',
  '4':'实验室主任',
  '5':'二级单位',
  '6':'职能部门',
  '7':'职能部门领导',

}
export const operationUnit = {
  '3':'指导老师',
  '4':'实验室主任',
  '5':'二级单位',
  '6':'职能部门'}
export const grade = [2016,2017,2018,2019]
export const memberRole = ['指导老师','项目组长','普通成员']
export const statusType = {
  '-4':'重点申请',
  '-3':'项目已被终止',
  '-2':'驳回修改',
  '0':'待审核',
  '1':'实验室待上报',
  '2':'实验室已上报',
  '3':'二级单位待上报',
  '4':'二级单位已上报',
  '5':'职能部门审核通过',
  '6':'中期检查',
  '7':'项目结题'
}
export const funds = ['500','2500','3000','5000']
export const majorCollege = [
  {
    cId:'1',
    cName:'石油与天然气工程学院',
    majors:[
      {
        mId:'1',
        mName:'石油工程'
      },
      {
        mId:'2',
        mName:'油气储运工程'
      },
      {
        mId:'3',
        mName:'海洋油气工程'
      },
    ]
  },
  {
    cId:'2',
    cName:'地球科学与技术学院',
    majors:[
      {
        mId:'4',
        mName:'资源勘查工程'
      },
      {
        mId:'5',
        mName:'勘查技术与工程'
      },
      {
        mId:'6',
        mName:'地质学'
      },
      {
        mId:'7',
        mName:'地理信息科学'
      },
      {
        mId:'8',
        mName:'城市地下空间工程'
      },
    ]
  }
  ,
  {
    cId:'3',
    cName:'机电工程学院',
    majors:[
      {
        mId:'9',
        mName:'机械工程'
      },
      {
        mId:'10',
        mName:'机械设计制造及其自动化'
      },
      {
        mId:'11',
        mName:'工业设计'
      },
      {
        mId:'12',
        mName:'过程装备与控制工程'
      },
      {
        mId:'13',
        mName:'测控技术与仪器'
      },
    ]
  },
  {
    cId:'4',
    cName:'化学化工学院',
    majors:[
      {
        mId:'14',
        mName:'化学工程与工艺'
      },
      {
        mId:'15',
        mName:'应用化学'
      },
      {
        mId:'16',
        mName:'环境工程'
      },
      {
        mId:'17',
        mName:'安全工程'
      },
      {
        mId:'18',
        mName:'化学'
      },
    ]
  }
  ,
  {
    cId:'5',
    cName:'材料科学与工程学院',
    majors:[
      {
        mId:'19',
        mName:'高分子材料与工程'
      },
      {
        mId:'20',
        mName:'材料科学与工程'
      },
      {
        mId:'21',
        mName:'新能源材料与器件'
      },
      {
        mId:'22',
        mName:'材料成型及控制工程'
      },
      {
        mId:'23',
        mName:'新能源科学与工程'
      },
    ]
  },
  {
    cId:'6',
    cName:'计算机科学学院',
    majors:[
      {
        mId:'24',
        mName:'计算机科学与技术'
      },
      {
        mId:'25',
        mName:'软件工程'
      },
      {
        mId:'26',
        mName:'网络工程'
      },
      {
        mId:'27',
        mName:'物联网工程'
      },
      {
        mId:'28',
        mName:'数据科学与大数据技术'
      },
      {
        mId:'29',
        mName:'网络空间安全'
      },
    ]
  },
  {
    cId:'7',
    cName:'电气信息学院',
    majors:[
      {
        mId:'30',
        mName:'自动化'
      },
      {
        mId:'31',
        mName:'电子信息工程'
      },
      {
        mId:'32',
        mName:'电气工程及其自动化'
      },
      {
        mId:'33',
        mName:'通信工程'
      }
    ]
  },
  {
    cId:'8',
    cName:'土木工程与建筑学院',
    majors:[
      {
        mId:'34',
        mName:'土木工程'
      },
      {
        mId:'35',
        mName:'建筑环境与能源应用工程'
      },
      {
        mId:'36',
        mName:'测绘工程'
      },
      {
        mId:'37',
        mName:'工程管理'
      },
      
    ]
  },
  {
    cId:'9',
    cName:'理学院',
    majors:[
      {
        mId:'38',
        mName:'信息与计算科学'
      },
      {
        mId:'39',
        mName:'电子信息科学与技术'
      }
    ]
  },
  {
    cId:'10',
    cName:'经济管理学院',
    majors:[
      {
        mId:'40',
        mName:'工商管理'
      },
      {
        mId:'41',
        mName:'市场营销'
      },
      {
        mId:'42',
        mName:'经济学'
      },
      {
        mId:'43',
        mName:'电子商务'
      },
      {
        mId:'45',
        mName:'会计学'
      },
      {
        mId:'46',
        mName:'公共事业管理'
      },
    ]
  }
  ,
  {
    cId:'11',
    cName:'法学院',
    majors:[
      {
        mId:'47',
        mName:'社会工作'
      },
      {
        mId:'48',
        mName:'法学'
      },
     
    ]
  },
  {
    cId:'12',
    cName:'外国语学院',
    majors:[
      {
        mId:'49',
        mName:'英语'
      },
      {
        mId:'50',
        mName:'俄语'
      },
    ]
  },
  {
    cId:'13',
    cName:'体育学院',
    majors:[
      {
        mId:'51',
        mName:'体育教育'
      },
      
    ]
  },
  {
    cId:'14',
    cName:'艺术学院',
    majors:[
      {
        mId:'52',
        mName:'表演'
      },
      {
        mId:'53',
        mName:'播音与主持艺术'
      },
      {
        mId:'54',
        mName:'广播电视编导'
      }
    ]
  }
  
]
export const major = majorCollege.reduce((cur,pre)=>{
    return cur.concat(pre.majors)
  },[])
export const collegeTimeLimit = {
  '0':'申报时间限制',
  '1':'学生申请加入项目时间限制',
  '2':'审批学生申请时间限制',
  '3':'实验室审核时间限制',
  '4':'重点项目申报时间限制',
  '5':'指导老师重点项目审核时间限制',
  '6':'实验室重点项目审核时间限制',
  '7':'实验室上报时间限制',
  '8':'二级单位审核时间限制',
  '20':'二级单位上报时间限制'
}
export const applyModel = `
Content-Type: text/html; charset="utf-8"
  <html xmlns:v="urn:schemas-microsoft-com:vml"  
xmlns:o="urn:schemas-microsoft-com:office:office"  
xmlns:w="urn:schemas-microsoft-com:office:word"  
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"  
xmlns:st1="urn:schemas-microsoft-com:office:smarttags"  
xmlns="http://www.w3.org/TR/REC-html40">  
  
<head>  
<meta http-equiv=Content-Type content="text/html; charset=utf-8">  
<meta name=ProgId content=Word.Document>  
<meta name=Generator content="Microsoft Word 15">  
<meta name=Originator content="Microsoft Word 15">  
<link rel=File-List href="附件一.files/filelist.xml">  
<title>附件一</title>  
<o:SmartTagType namespaceuri="urn:schemas-microsoft-com:office:smarttags"  
 name="chmetcnv"/>  
<link rel=themeData href="附件一.files/themedata.thmx">  
<link rel=colorSchemeMapping href="附件一.files/colorschememapping.xml">  
<!--[if gte mso 9]><xml>  
 <w:WordDocument>  
  <w:View>Print</w:View>  
  <w:TrackMoves>false</w:TrackMoves>  
  <w:TrackFormatting/>  
  <w:PunctuationKerning/>  
  <w:DrawingGridVerticalSpacing>7.8 磅</w:DrawingGridVerticalSpacing>  
  <w:DisplayHorizontalDrawingGridEvery>0</w:DisplayHorizontalDrawingGridEvery>  
  <w:DisplayVerticalDrawingGridEvery>2</w:DisplayVerticalDrawingGridEvery>  
  <w:ValidateAgainstSchemas/>  
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>  
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>  
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>  
  <w:DoNotPromoteQF/>  
  <w:LidThemeOther>EN-US</w:LidThemeOther>  
  <w:LidThemeAsian>ZH-CN</w:LidThemeAsian>  
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>  
  <w:Compatibility>  
   <w:SpaceForUL/>  
   <w:BalanceSingleByteDoubleByteWidth/>  
   <w:DoNotLeaveBackslashAlone/>  
   <w:ULTrailSpace/>  
   <w:DoNotExpandShiftReturn/>  
   <w:AdjustLineHeightInTable/>  
   <w:BreakWrappedTables/>  
   <w:SelectEntireFieldWithStartOrEnd/>  
   <w:UseWord2002TableStyleRules/>  
   <w:UseWord2010TableStyleRules/>  
   <w:DontUseIndentAsNumberingTabStop/>  
   <w:FELineBreak11/>  
   <w:WW11IndentRules/>  
   <w:DontAutofitConstrainedTables/>  
   <w:AutofitLikeWW11/>  
   <w:HangulWidthLikeWW11/>  
   <w:UseNormalStyleForList/>  
   <w:SplitPgBreakAndParaMark/>  
   <w:DontVertAlignCellWithSp/>  
   <w:DontBreakConstrainedForcedTables/>  
   <w:DontVertAlignInTxbx/>  
   <w:Word11KerningPairs/>  
   <w:CachedColBalance/>  
   <w:UseFELayout/>  
  </w:Compatibility>  
  <w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel>  
  <m:mathPr>  
   <m:mathFont m:val="Cambria Math"/>  
   <m:brkBin m:val="before"/>  
   <m:brkBinSub m:val="&#45;-"/>  
   <m:smallFrac m:val="off"/>  
   <m:dispDef/>  
   <m:lMargin m:val="0"/>  
   <m:rMargin m:val="0"/>  
   <m:defJc m:val="centerGroup"/>  
   <m:wrapIndent m:val="1440"/>  
   <m:intLim m:val="subSup"/>  
   <m:naryLim m:val="undOvr"/>  
  </m:mathPr></w:WordDocument>  
</xml><![endif]--><!--[if gte mso 9]><xml>  
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"  
  DefSemiHidden="false" DefQFormat="false" LatentStyleCount="371">  
  <w:LsdException Locked="false" QFormat="true" Name="Normal"/>  
  <w:LsdException Locked="false" QFormat="true" Name="heading 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 4"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 5"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 6"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 7"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 8"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="heading 9"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   QFormat="true" Name="caption"/>  
  <w:LsdException Locked="false" QFormat="true" Name="Title"/>  
  <w:LsdException Locked="false" Priority="1" Name="Default Paragraph Font"/>  
  <w:LsdException Locked="false" QFormat="true" Name="Subtitle"/>  
  <w:LsdException Locked="false" QFormat="true" Name="Strong"/>  
  <w:LsdException Locked="false" QFormat="true" Name="Emphasis"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Normal Table"/>  
  <w:LsdException Locked="false" Priority="99" Name="No List"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Simple 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Simple 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Simple 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Classic 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Classic 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Classic 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Classic 4"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Colorful 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Colorful 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Colorful 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Columns 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Columns 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Columns 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Columns 4"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Columns 5"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 4"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 5"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 6"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 7"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Grid 8"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 4"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 5"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 6"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 7"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table List 8"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table 3D effects 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table 3D effects 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table 3D effects 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Contemporary"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Elegant"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Professional"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Subtle 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Subtle 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Web 1"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Web 2"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Web 3"/>  
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"  
   Name="Table Theme"/>  
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"  
   Name="Placeholder Text"/>  
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>  
  <w:LsdException Locked="false" Priority="99" SemiHidden="true" Name="Revision"/>  
  <w:LsdException Locked="false" Priority="34" QFormat="true"  
   Name="List Paragraph"/>  
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>  
  <w:LsdException Locked="false" Priority="30" QFormat="true"  
   Name="Intense Quote"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>  
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>  
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>  
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>  
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>  
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>  
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>  
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>  
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>  
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>  
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>  
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>  
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>  
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>  
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>  
  <w:LsdException Locked="false" Priority="19" QFormat="true"  
   Name="Subtle Emphasis"/>  
  <w:LsdException Locked="false" Priority="21" QFormat="true"  
   Name="Intense Emphasis"/>  
  <w:LsdException Locked="false" Priority="31" QFormat="true"  
   Name="Subtle Reference"/>  
  <w:LsdException Locked="false" Priority="32" QFormat="true"  
   Name="Intense Reference"/>  
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>  
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"  
   UnhideWhenUsed="true" Name="Bibliography"/>  
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"  
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>  
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>  
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>  
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>  
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>  
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>  
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>  
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>  
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>  
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 1"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 1"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 1"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 2"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 2"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 2"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 3"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 3"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 3"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 4"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 4"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 4"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 5"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 5"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 5"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="Grid Table 1 Light Accent 6"/>  
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>  
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>  
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>  
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="Grid Table 6 Colorful Accent 6"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="Grid Table 7 Colorful Accent 6"/>  
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>  
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>  
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 1"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 1"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 1"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 2"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 2"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 2"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 3"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 3"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 3"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 4"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 4"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 4"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 5"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 5"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 5"/>  
  <w:LsdException Locked="false" Priority="46"  
   Name="List Table 1 Light Accent 6"/>  
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>  
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>  
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>  
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>  
  <w:LsdException Locked="false" Priority="51"  
   Name="List Table 6 Colorful Accent 6"/>  
  <w:LsdException Locked="false" Priority="52"  
   Name="List Table 7 Colorful Accent 6"/>  
 </w:LatentStyles>  
</xml><![endif]--><!--[if !mso]><object  
 classid="clsid:38481807-CA0E-42D2-BF39-B33AF135CC4D" id=ieooui></object>  
<style>  
st1\:*{behavior:url(#ieooui) }  
</style>  
<![endif]-->  
<style>  
<!--  
 /* Font Definitions */  
 @font-face  
	{font-family:宋体;  
	panose-1:2 1 6 0 3 1 1 1 1 1;  
	mso-font-alt:SimSun;  
	mso-font-charset:134;  
	mso-generic-font-family:auto;  
	mso-font-pitch:variable;  
	mso-font-signature:3 680460288 22 0 262145 0;}  
@font-face  
	{font-family:黑体;  
	panose-1:2 1 6 9 6 1 1 1 1 1;  
	mso-font-alt:SimHei;  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:-2147482945 953122042 22 0 262145 0;}  
@font-face  
	{font-family:"Cambria Math";  
	panose-1:2 4 5 3 5 4 6 3 2 4;  
	mso-font-charset:0;  
	mso-generic-font-family:roman;  
	mso-font-pitch:variable;  
	mso-font-signature:-536870145 1107305727 0 0 415 0;}  
@font-face  
	{font-family:楷体_GB2312;  
	mso-font-alt:楷体;  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:1 135135232 16 0 262144 0;}  
@font-face  
	{font-family:仿宋_GB2312;  
	mso-font-alt:仿宋;  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:1 135135232 16 0 262144 0;}  
@font-face  
	{font-family:"\@宋体";  
	panose-1:2 1 6 0 3 1 1 1 1 1;  
	mso-font-charset:134;  
	mso-generic-font-family:auto;  
	mso-font-pitch:variable;  
	mso-font-signature:3 680460288 22 0 262145 0;}  
@font-face  
	{font-family:"\@黑体";  
	panose-1:2 1 6 0 3 1 1 1 1 1;  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:-2147482945 953122042 22 0 262145 0;}  
@font-face  
	{font-family:"\@楷体_GB2312";  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:1 135135232 16 0 262144 0;}  
@font-face  
	{font-family:"\@仿宋_GB2312";  
	mso-font-charset:134;  
	mso-generic-font-family:modern;  
	mso-font-pitch:fixed;  
	mso-font-signature:1 135135232 16 0 262144 0;}  
@font-face  
	{font-family:"Microsoft YaHei UI";  
	panose-1:2 11 5 3 2 2 4 2 2 4;  
	mso-font-charset:134;  
	mso-generic-font-family:swiss;  
	mso-font-pitch:variable;  
	mso-font-signature:-2147483001 684670032 22 0 262175 0;}  
@font-face  
	{font-family:"\@Microsoft YaHei UI";  
	mso-font-charset:134;  
	mso-generic-font-family:swiss;  
	mso-font-pitch:variable;  
	mso-font-signature:-2147483001 684670032 22 0 262175 0;}  
 /* Style Definitions */  
 p.MsoNormal, li.MsoNormal, div.MsoNormal  
	{mso-style-unhide:no;  
	mso-style-qformat:yes;  
	mso-style-parent:"";  
	margin:0cm;  
	margin-bottom:.0001pt;  
	text-align:justify;  
	text-justify:inter-ideograph;  
	mso-pagination:none;  
	font-size:10.5pt;  
	mso-bidi-font-size:12.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
p.MsoHeader, li.MsoHeader, div.MsoHeader  
	{mso-style-unhide:no;  
	mso-style-link:"页眉 字符";  
	margin:0cm;  
	margin-bottom:.0001pt;  
	text-align:center;  
	mso-pagination:none;  
	tab-stops:center 207.65pt right 415.3pt;  
	layout-grid-mode:char;  
	border:none;  
	mso-border-bottom-alt:solid windowtext .75pt;  
	padding:0cm;  
	mso-padding-alt:0cm 0cm 1.0pt 0cm;  
	font-size:9.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
p.MsoFooter, li.MsoFooter, div.MsoFooter  
	{mso-style-unhide:no;  
	mso-style-link:"页脚 字符";  
	margin:0cm;  
	margin-bottom:.0001pt;  
	mso-pagination:none;  
	tab-stops:center 207.65pt right 415.3pt;  
	layout-grid-mode:char;  
	font-size:9.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
span.MsoPageNumber  
	{mso-style-unhide:no;  
	font-family:"Times New Roman",serif;  
	mso-ascii-font-family:"Times New Roman";  
	mso-hansi-font-family:"Times New Roman";  
	mso-bidi-font-family:"Times New Roman";}  
a:link, span.MsoHyperlink  
	{mso-style-noshow:yes;  
	mso-style-priority:99;  
	font-family:"Times New Roman",serif;  
	mso-ascii-font-family:"Times New Roman";  
	mso-hansi-font-family:"Times New Roman";  
	mso-bidi-font-family:"Times New Roman";  
	color:#002551;  
	mso-text-animation:none;  
	text-decoration:none;  
	text-underline:none;  
	text-decoration:none;  
	text-line-through:none;}  
a:visited, span.MsoHyperlinkFollowed  
	{mso-style-noshow:yes;  
	mso-style-priority:99;  
	color:#954F72;  
	mso-themecolor:followedhyperlink;  
	text-decoration:underline;  
	text-underline:single;}  
p.MsoDocumentMap, li.MsoDocumentMap, div.MsoDocumentMap  
	{mso-style-noshow:yes;  
	mso-style-unhide:no;  
	mso-style-link:"文档结构图 字符";  
	margin:0cm;  
	margin-bottom:.0001pt;  
	text-align:justify;  
	text-justify:inter-ideograph;  
	mso-pagination:none;  
	background:navy;  
	font-size:10.5pt;  
	mso-bidi-font-size:12.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate  
	{mso-style-noshow:yes;  
	mso-style-unhide:no;  
	mso-style-link:"批注框文本 字符";  
	margin:0cm;  
	margin-bottom:.0001pt;  
	text-align:justify;  
	text-justify:inter-ideograph;  
	mso-pagination:none;  
	font-size:9.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
p.msonormal0, li.msonormal0, div.msonormal0  
	{mso-style-name:msonormal;  
	mso-style-unhide:no;  
	mso-margin-top-alt:auto;  
	margin-right:0cm;  
	mso-margin-bottom-alt:auto;  
	margin-left:0cm;  
	mso-pagination:widow-orphan;  
	font-size:12.0pt;  
	font-family:宋体;  
	mso-bidi-font-family:宋体;}  
span.a  
	{mso-style-name:"页眉 字符";  
	mso-style-unhide:no;  
	mso-style-locked:yes;  
	mso-style-link:页眉;  
	mso-ansi-font-size:9.0pt;  
	mso-bidi-font-size:9.0pt;  
	font-family:宋体;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
span.a0  
	{mso-style-name:"页脚 字符";  
	mso-style-unhide:no;  
	mso-style-locked:yes;  
	mso-style-link:页脚;  
	mso-ansi-font-size:9.0pt;  
	mso-bidi-font-size:9.0pt;  
	font-family:宋体;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
span.a1  
	{mso-style-name:"文档结构图 字符";  
	mso-style-unhide:no;  
	mso-style-locked:yes;  
	mso-style-link:文档结构图;  
	mso-ansi-font-size:9.0pt;  
	mso-bidi-font-size:9.0pt;  
	font-family:"Microsoft YaHei UI",sans-serif;  
	mso-ascii-font-family:"Microsoft YaHei UI";  
	mso-fareast-font-family:"Microsoft YaHei UI";  
	mso-font-kerning:1.0pt;}  
span.a2  
	{mso-style-name:"批注框文本 字符";  
	mso-style-unhide:no;  
	mso-style-locked:yes;  
	mso-style-link:批注框文本;  
	mso-ansi-font-size:9.0pt;  
	mso-bidi-font-size:9.0pt;  
	font-family:宋体;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
p.CharCharCharCharChar1CharCharCharChar, li.CharCharCharCharChar1CharCharCharChar, div.CharCharCharCharChar1CharCharCharChar  
	{mso-style-name:"Char Char Char Char Char1 Char Char Char Char";  
	mso-style-update:auto;  
	mso-style-unhide:no;  
	margin-top:0cm;  
	margin-right:0cm;  
	margin-bottom:0cm;  
	margin-left:68.0pt;  
	margin-bottom:.0001pt;  
	text-align:justify;  
	text-justify:inter-ideograph;  
	text-indent:-36.0pt;  
	mso-pagination:none;  
	tab-stops:list 68.0pt;  
	font-size:12.0pt;  
	font-family:"Times New Roman",serif;  
	mso-fareast-font-family:宋体;  
	mso-font-kerning:1.0pt;}  
.MsoChpDefault  
	{mso-style-type:export-only;  
	mso-default-props:yes;  
	font-size:10.0pt;  
	mso-ansi-font-size:10.0pt;  
	mso-bidi-font-size:10.0pt;  
	mso-ascii-font-family:"Times New Roman";  
	mso-hansi-font-family:"Times New Roman";  
	mso-font-kerning:0pt;}  
 /* Page Definitions */  
 @page  
	{mso-page-border-surround-header:no;  
	mso-page-border-surround-footer:no;}  
@page WordSection1  
	{size:595.3pt 841.9pt;  
	margin:72.0pt 89.85pt 72.0pt 89.85pt;  
	mso-header-margin:42.55pt;  
	mso-footer-margin:49.6pt;  
	mso-page-numbers:0;  
	mso-title-page:yes;  
	mso-paper-source:0;  
	layout-grid:15.6pt;}  
div.WordSection1  
	{page:WordSection1;}  
@page WordSection2  
	{size:595.3pt 841.9pt;  
	margin:72.0pt 89.85pt 72.0pt 89.85pt;  
	mso-header-margin:42.55pt;  
	mso-footer-margin:49.6pt;  
	mso-page-numbers:0;  
	mso-title-page:yes;  
	mso-paper-source:0;  
	layout-grid:15.6pt;}  
div.WordSection2  
	{page:WordSection2;}  
@page WordSection3  
	{size:595.3pt 841.9pt;  
	margin:72.0pt 89.85pt 72.0pt 89.85pt;  
	mso-header-margin:42.55pt;  
	mso-footer-margin:49.6pt;  
	mso-page-numbers:0;  
	mso-title-page:yes;  
	mso-paper-source:0;  
	layout-grid:15.6pt;}  
div.WordSection3  
	{page:WordSection3;}  
-->  
</style>  
<!--[if gte mso 10]>  
<style>  
 /* Style Definitions */  
 table.MsoNormalTable  
	{mso-style-name:普通表格;  
	mso-tstyle-rowband-size:0;  
	mso-tstyle-colband-size:0;  
	mso-style-noshow:yes;  
	mso-style-priority:99;  
	mso-style-parent:"";  
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;  
	mso-para-margin:0cm;  
	mso-para-margin-bottom:.0001pt;  
	mso-pagination:widow-orphan;  
	font-size:10.0pt;  
	font-family:"Times New Roman",serif;}  
</style>  
<![endif]--><!--[if gte mso 9]><xml>  
 <o:shapedefaults v:ext="edit" spidmax="1026"/>  
</xml><![endif]--><!--[if gte mso 9]><xml>  
 <o:shapelayout v:ext="edit">  
  <o:idmap v:ext="edit" data="1"/>  
 </o:shapelayout></xml><![endif]-->  
</head>  
  
<body lang=ZH-CN link="#002551" vlink="#954F72" style='tab-interval:21.0pt;  
text-justify-trim:punctuation'>  
  
<div class=WordSection1 style='layout-grid:15.6pt'>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
12.0pt;font-family:楷体_GB2312'><span  
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
</span></span><span style='font-size:14.0pt;mso-bidi-font-size:12.0pt;  
font-family:楷体_GB2312'>编号：<span lang=EN-US><span  
style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
</span><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><span  
style='font-size:22.0pt;mso-bidi-font-size:12.0pt;font-family:黑体;mso-hansi-font-family:  
"Times New Roman";letter-spacing:1.0pt;mso-bidi-font-weight:bold'>西南石油大学<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><span  
style='font-size:22.0pt;mso-bidi-font-size:12.0pt;font-family:黑体;mso-hansi-font-family:  
"Times New Roman";letter-spacing:1.0pt;mso-bidi-font-weight:bold'>课外开放实验校级重点项目申请书<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
style='font-size:22.0pt;mso-bidi-font-size:12.0pt;font-family:楷体_GB2312;  
letter-spacing:1.0pt;mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:15.0pt;font-family:楷体_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>项目名称：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'> <%=projectName%><o:p></o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>项目类型：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'> <%=projectType%><o:p></o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>项目成员：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'> <%=students.map(item=>item.realName).join('、')%> <o:p></o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>专业年级：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'><%=major%> <%=grade%><o:p></o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>指导教师：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'> <%=teachers.map(item=>item.realName).join('、')%><o:p></o:p></span></p>  
  
<p class=MsoNormal style='margin-left:42.0pt;text-indent:21.0pt;line-height:  
150%'><span style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>推荐单位：</span><span  
lang=EN-US style='font-size:14.0pt;line-height:150%;mso-fareast-font-family:  
黑体'>_______________________<o:p></o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
12.0pt'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
12.0pt'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
12.0pt'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal align=center style='text-align:center'><b style='mso-bidi-font-weight:  
normal'><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>年</span></b><b  
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><span  
style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span></b><b style='mso-bidi-font-weight:  
normal'><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>月</span></b><b  
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><span  
style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span></b><b style='mso-bidi-font-weight:  
normal'><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
"Times New Roman";mso-hansi-font-family:"Times New Roman"'>日</span></b><b  
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><o:p></o:p></span></b></p>  
  
</div>  
  
<span lang=EN-US style='font-size:15.0pt;line-height:200%;font-family:黑体;  
mso-hansi-font-family:宋体;mso-bidi-font-family:"Times New Roman";mso-font-kerning:  
1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:  
AR-SA'><br clear=all style='page-break-before:always;mso-break-type:section-break'>  
</span>  
  
<div class=WordSection2 style='layout-grid:15.6pt'>  
  
<p class=MsoNormal align=center style='text-align:center'><span  
style='font-size:12.0pt;font-family:黑体;mso-hansi-font-family:宋体'>填 写 说 明<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>1</span><span style='font-size:  
12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、请认真阅读《西南石油大学大学生课外开放实验管理办法》（西南石大设［<span  
lang=EN-US>2015</span>］<span lang=EN-US>13</span>号）及有关申报通知要求，按规定填写；<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>2</span><span style='font-size:  
12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>、所填各项内容要求科学严谨、实事求是、表述清楚、简明扼要、层次分明，尽量列出小标题并加黑；<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%;mso-outline-level:1'><span lang=EN-US style='font-size:12.0pt;  
line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>3</span><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>、正文部分用宋体或仿宋小<span lang=EN-US>4</span>号字填写；<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%;mso-pagination:widow-orphan'><span lang=EN-US  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>4</span><span style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'>、项目类型是指</span><span style='font-size:12.0pt;  
line-height:150%;font-family:仿宋_GB2312;mso-bidi-font-weight:bold'>：科研、科技活动、自选课题、计算机应用、人文素质</span><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312'>之一；</span><span  
lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'><o:p></o:p></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%;mso-pagination:widow-orphan'><span lang=EN-US  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>5</span><span style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'>、</span><span style='font-size:12.0pt;line-height:  
150%;font-family:仿宋_GB2312;mso-hansi-font-family:宋体;mso-bidi-font-family:宋体'>推荐意见须由实验项目所属二级单位填写，并就“申请书真实性”、“学术水平”、“项目可行性”及“支撑条件”等签署具体意见。</span><span  
lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'><o:p></o:p></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%;mso-pagination:widow-orphan'><span lang=EN-US  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>6</span><span style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'>、本申请书统一用<span lang=EN-US>A4</span>普通复印纸套印成册，一式一份交设备与实验室管理处，随附电子版文档。<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal align=center style='text-align:center;text-indent:24.0pt;  
mso-char-indent-count:2.0;line-height:150%'><span style='font-size:12.0pt;  
line-height:150%;font-family:黑体;mso-hansi-font-family:宋体'>结题验收时将提交的材料：<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>1.<a  
href="http://sbgl.swpu.edu.cn/eWebEditor_051012/web_up_file/20101012052154831.doc"  
target="_blank"><span lang=EN-US style='color:windowtext'><span lang=EN-US>课外开放实验校级重点项目结题报告</span></span></a></span><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>（书面一式一份和电子版）；<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%;mso-outline-level:1;tab-stops:314.25pt'><span lang=EN-US  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>2.</span><span style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;  
mso-hansi-font-family:宋体'>项目实验报告（书面一式一份和电子版）<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>3.</span><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>实验过程三幅照片（大于<st1:chmetcnv unitname="m" sourcevalue="1" hasspace="False"  
negative="False" numbertype="1" tcsc="0" w:st="on"><span lang=EN-US>1M</span></st1:chmetcnv>，至少一张有学生在内）原文件及图片说明，软件源程序；<span  
lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>4.</span><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
宋体'>源于开放实验的标志性成果影印件电子文档，或证明材料。<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;mso-char-indent-count:2.0;  
line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%;  
font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='mso-bidi-font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='mso-bidi-font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='mso-bidi-font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='mso-bidi-font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='mso-bidi-font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></p>  
  
</div>  
  
<span lang=EN-US style='font-size:10.5pt;mso-bidi-font-size:14.0pt;font-family:  
宋体;mso-hansi-font-family:"Times New Roman";mso-bidi-font-family:"Times New Roman";  
mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;  
mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always;  
mso-break-type:section-break'>  
</span>  
  
<div class=WordSection3 style='layout-grid:15.6pt'>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:14.0pt;font-family:宋体'>一、项目基本信息</span></b><b style='mso-bidi-font-weight:  
normal'><span lang=EN-US style='font-size:14.0pt;font-family:宋体;mso-hansi-font-family:  
"Times New Roman"'><o:p></o:p></span></b></p>  
  
<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=718  
 style='width:430.8pt;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;  
 mso-yfti-tbllook:480;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:  
 .5pt solid windowtext;mso-border-insidev:.5pt solid windowtext'>  
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>  
  <td width=718 colspan=17 style='width:430.8pt;border:solid windowtext 1.0pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal><span style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'>项目名称：<%=projectName%><span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:1'>  
  <td width=718 colspan=17 style='width:430.8pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal><span style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'>项目类型：<%=projectType%><span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:2;page-break-inside:avoid'>  
  <td width=54 rowspan=<%=students.length+1%> style="width:32.35pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt">  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>项目成员<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=75 style='width:44.95pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>姓名<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=45 colspan=2 style='width:27.2pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>性别<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=130 colspan=3 style='width:80pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>专业年级<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=105 colspan=2 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>学号<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=105 colspan=3 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>联系电话<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=135 colspan=3 style='width:80.95pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>QQ</span><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>号<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=124 colspan=2 style='width:74.35pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>本人签名<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
<%for(var i = 0;i<students.length;i++){%>
 <tr style='mso-yfti-irow:3;page-break-inside:avoid'>  
  <td width=75 style='width:44.95pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].realName%></span></p>  
  </td>  
  <td width=45 colspan=2 style='width:27.2pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].sex%></span></p>  
  </td>  
  <td width=107 colspan=3 style='width:64.1pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].major%><%=students[i].grade%></span></p>  
  </td>  
  <td width=105 colspan=2 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].code%></span></p>  
  </td>  
  <td width=105 colspan=3 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].mobilePhone%></span></p>  
  </td>  
  <td width=135 colspan=3 style='width:80.95pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=students[i].qqNum%></span></p>  
  </td>  
  <td width=124 colspan=2 style='width:74.35pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
 </tr>  
<%}%>
 <tr style='mso-yfti-irow:6;height:135.75pt'>  
  <td width=54 rowspan=2 style='width:32.35pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt;height:135.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>项目成员简介<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=664 colspan=16 valign=top style='width:398.45pt;border-top:none;  
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:135.75pt'>  
  <p class=MsoNormal><span style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'>项目组长<b style='mso-bidi-font-weight:normal'><span  
  lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span></b>简介<span lang=EN-US><o:p></o:p></span></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:7;height:260.3pt'>  
  <td width=664 colspan=16 valign=top style='width:398.45pt;border-top:none;  
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:260.3pt'>  
  <p class=MsoNormal><span style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'>其他成员简介，在项目中的分工及工作。<span lang=EN-US><o:p></o:p></span></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体;color:#999999'><o:p>&nbsp;</o:p></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:8;page-break-inside:avoid'>  
  <td width=54 rowspan=3 style='width:32.35pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>指导教师<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=85 colspan=2 style='width:50.9pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>姓名<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=35 style='width:21.25pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center;line-height:150%'><span  
  style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
  宋体'>性别<span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=59 colspan=2 style='width:35.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center;line-height:150%'><span  
  style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312;mso-hansi-font-family:  
  宋体'>技术职称<span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=130 colspan=4 style='width:77.8pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>员工号<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=118 colspan=3 style='width:70.85pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>工作单位<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=127 colspan=3 style='width:76.45pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>联系电话<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=109 style='width:65.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>本人签名<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
 <%for(var i=0;i<teachers.length;i++){%>
 <tr style='mso-yfti-irow:9;page-break-inside:avoid;height:16.75pt'>  
  <td width=85 colspan=2 style='width:50.9pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].realName%></span></p>  
  </td>  
  <td width=35 style='width:21.25pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].sex%></span></p>  
  </td>  
  <td width=59 colspan=2 style='width:35.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].technicalRole%></span></p>  
  </td>  
  <td width=130 colspan=4 style='width:77.8pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].code%></span></p>  
  </td>  
  <td width=118 colspan=3 style='width:70.85pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].realName%></span></p>  
  </td>  
  <td width=127 colspan=3 style='width:76.45pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><%=teachers[i].mobilePhone%></span></p>  
  </td>  
  <td width=109 style='width:65.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:16.75pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
 </tr>  
 <%}%>
 <tr style='mso-yfti-irow:10;page-break-inside:avoid;height:20.5pt'>  
  <td width=85 colspan=2 style='width:50.9pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=35 style='width:21.25pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=59 colspan=2 style='width:35.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=130 colspan=4 style='width:77.8pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=118 colspan=3 style='width:70.85pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=127 colspan=3 style='width:76.45pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=109 style='width:65.6pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:11'>  
  <td width=189 colspan=5 style='width:113.25pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>申请经费<span  
  lang=EN-US>(</span>元<span lang=EN-US>)<o:p></o:p></span></span></p>  
  </td>  
  <td width=529 colspan=12 style='width:317.55pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312;  
  mso-hansi-font-family:宋体'><%=applyFunds%></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:12'>  
  <td width=174 colspan=4 style='width:104.5pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><b  
  style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;font-family:  
  仿宋_GB2312;mso-hansi-font-family:宋体'>其中：</span></b><span style='font-size:  
  12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>实验材料费<span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=135 colspan=4 style='width:81.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>资料、印刷费<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=105 colspan=3 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>出版费等<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=135 colspan=3 style='width:80.95pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>教师酬金<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
  <td width=169 colspan=3 style='width:101.35pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'>其他合理费用<span  
  lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:13;mso-yfti-lastrow:yes'>  
  <td width=174 colspan=4 style='width:104.5pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=135 colspan=4 style='width:81.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=105 colspan=3 style='width:63.0pt;border-top:none;border-left:none;  
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=135 colspan=3 style='width:80.95pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US  
  style='font-size:12.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体'><o:p>&nbsp;</o:p></span></p>  
  </td>  
  <td width=169 colspan=3 style='width:101.35pt;border-top:none;border-left:  
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;  
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal align=center style='text-align:center'><span  
  style='font-size:9.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:宋体;  
  color:gray'>此项费用需详细说明<span lang=EN-US><o:p></o:p></span></span></p>  
  </td>  
 </tr>  
 <![if !supportMisalignedColumns]>  
 <tr height=0>  
  <td width=54 style='border:none'></td>  
  <td width=75 style='border:none'></td>  
  <td width=10 style='border:none'></td>  
  <td width=38 style='border:none'></td>  
  <td width=15 style='border:none'></td>  
  <td width=45 style='border:none'></td>  
  <td width=16 style='border:none'></td>  
  <td width=60 style='border:none'></td>  
  <td width=45 style='border:none'></td>  
  <td width=9 style='border:none'></td>  
  <td width=51 style='border:none'></td>  
  <td width=45 style='border:none'></td>  
  <td width=22 style='border:none'></td>  
  <td width=68 style='border:none'></td>  
  <td width=45 style='border:none'></td>  
  <td width=15 style='border:none'></td>  
  <td width=109 style='border:none'></td>  
 </tr>  
 <![endif]>  
</table>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:14.0pt;font-family:宋体'>二、报告正文</span></b><b style='mso-bidi-font-weight:  
normal'><span lang=EN-US style='font-size:14.0pt;font-family:宋体;mso-hansi-font-family:  
"Times New Roman"'><o:p></o:p></span></b></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
style='font-size:12.0pt;font-family:仿宋_GB2312'>(</span></b><b style='mso-bidi-font-weight:  
normal'><span style='font-size:12.0pt;font-family:仿宋_GB2312'>一<span lang=EN-US>)</span>立项依据<span  
lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>1</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、国内外现状分析<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>2</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、本项目研究的目的、意义<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>（二）项目主要内容、目标和拟解决的关键问题<span  
lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>1</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、主要内容<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>2</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、目标<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>3</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、拟解决的关键问题<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>（三）项目特色或创新点<span lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>（四）项目研究的技术方案<span lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></b></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>（五）、时间安排<span lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>1</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、总体时间安排<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'>2</span><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>、分阶段时间安排<span lang=EN-US>(</span>标志性成果<span  
lang=EN-US>)<o:p></o:p></span></span></p>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal style='line-height:150%;layout-grid-mode:char;mso-layout-grid-align:  
none'><b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;  
line-height:150%;font-family:仿宋_GB2312'>（六）预期标志性成果（</span></b><span  
style='font-size:12.0pt;line-height:150%;font-family:仿宋_GB2312'>预期标志性成果仅指如下形式之一：<i  
style='mso-bidi-font-style:normal'><span lang=EN-US>1</span>、</i></span><i  
style='mso-bidi-font-style:normal'><span style='mso-bidi-font-size:10.5pt;  
line-height:150%;font-family:宋体;mso-hansi-font-family:"Times New Roman"'>授权专利，<span  
lang=EN-US>2</span>、公开刊物发表论文<span lang=EN-US>,3</span>、参加学科竞赛获省级三等奖及以上奖励<span  
lang=EN-US>,4</span>、创新实验教学项目<span lang=EN-US>&lt;</span>该项目列入实验教学大纲<span  
lang=EN-US>&gt;</span>，<span lang=EN-US>5</span>、用于教学的自研自制仪器或设备功能改进<span  
lang=EN-US>&lt;</span>该设备需承担实验教学任务<span lang=EN-US>&gt;</span>等</span></i><span  
style='mso-bidi-font-size:10.5pt;line-height:150%;font-family:宋体;mso-hansi-font-family:  
"Times New Roman"'>。专利证书、发表的论文、个人获奖证书必须有学生署名。</span><span style='font-size:  
12.0pt;line-height:150%;font-family:仿宋_GB2312'>）<span lang=EN-US><o:p></o:p></span></span></p>  
  
<p class=MsoNormal style='text-indent:24.0pt;line-height:150%;layout-grid-mode:  
char;mso-layout-grid-align:none'><span lang=EN-US style='font-size:12.0pt;  
line-height:150%;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:12.0pt;font-family:仿宋_GB2312'>（七）经费及使用说明</span></b><span  
style='mso-bidi-font-size:10.5pt;font-family:宋体;mso-hansi-font-family:"Times New Roman"'>（经费使用需按照文件中“</span><span  
style='mso-bidi-font-size:10.5pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
mso-hansi-font-family:"Times New Roman"'>开放实验基金及管理”相关规定</span><b  
style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;font-family:  
仿宋_GB2312'>）<span lang=EN-US><o:p></o:p></span></span></b></p>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
style='font-size:12.0pt;font-family:仿宋_GB2312'><o:p>&nbsp;</o:p></span></b></p>  
  
<b style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt;  
font-family:宋体;mso-hansi-font-family:"Times New Roman";mso-bidi-font-family:  
"Times New Roman";mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:  
ZH-CN;mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'>  
</span></b>  
  
<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
style='font-size:14.0pt;font-family:宋体'>三、审核意见</span></b><b style='mso-bidi-font-weight:  
normal'><span lang=EN-US style='font-size:14.0pt;font-family:宋体;mso-hansi-font-family:  
"Times New Roman"'><o:p></o:p></span></b></p>  
  
<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0  
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;  
 mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:  
 .5pt solid windowtext;mso-border-insidev:.5pt solid windowtext'>  
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:76.85pt'>  
  <td width=711 valign=top style='width:426.4pt;border:solid windowtext 1.0pt;  
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:76.85pt'>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
  style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>二级单位意见：</span></b><b  
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><o:p></o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal style='text-indent:14.0pt;mso-char-indent-count:1.0'><span  
  style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>负责人（签章）</span><span lang=EN-US  
  style='font-size:14.0pt'><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
  "Times New Roman";mso-hansi-font-family:"Times New Roman"'>院（系）盖章</span><span  
  lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span><span style='font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>年</span><span lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span style='font-family:  
  宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>月</span><span  
  lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span  
  style='font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:  
  "Times New Roman"'>日</span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:1'>  
  <td width=711 valign=top style='width:426.4pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
  style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>专家组审查意见：</span></b><b  
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><o:p></o:p></span></b></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
  12.0pt'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
  12.0pt'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
  12.0pt'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
  12.0pt'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal><span lang=EN-US style='font-size:14.0pt;mso-bidi-font-size:  
  12.0pt'><o:p>&nbsp;</o:p></span></p>  
  <p class=MsoNormal style='text-indent:14.0pt;mso-char-indent-count:1.0'><span  
  style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>负责人（签章）</span><span lang=EN-US  
  style='font-size:14.0pt'><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span><span lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span  
  style='font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:  
  "Times New Roman"'>年</span><span lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span style='font-family:  
  宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>月</span><span  
  lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span  
  style='font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:  
  "Times New Roman"'>日</span></p>  
  </td>  
 </tr>  
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>  
  <td width=711 valign=top style='width:426.4pt;border:solid windowtext 1.0pt;  
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;  
  padding:0cm 5.4pt 0cm 5.4pt'>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span  
  style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>实验室与设备管理处意见：</span></b><b  
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt'><o:p></o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US  
  style='font-size:14.0pt'><o:p>&nbsp;</o:p></span></b></p>  
  <p class=MsoNormal><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
  "Times New Roman";mso-hansi-font-family:"Times New Roman"'>负责人（签章）</span><span  
  lang=EN-US style='font-size:14.0pt'><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span><span style='font-size:14.0pt;font-family:宋体;mso-ascii-font-family:  
  "Times New Roman";mso-hansi-font-family:"Times New Roman"'>单位盖章</span><span  
  lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  </span></span><span style='font-family:宋体;mso-ascii-font-family:"Times New Roman";  
  mso-hansi-font-family:"Times New Roman"'>年</span><span lang=EN-US><span  
  style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span style='font-family:  
  宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'>月</span><span  
  lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp; </span></span><span  
  style='font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:  
  "Times New Roman"'>日</span><b style='mso-bidi-font-weight:normal'><span  
  lang=EN-US style='font-size:14.0pt'><o:p></o:p></span></b></p>  
  </td>  
 </tr>  
</table>  
  
<p class=MsoNormal><span lang=EN-US style='font-size:12.0pt'><o:p>&nbsp;</o:p></span></p>  
  
</div>  
  
</body>  
  
</html>
`
