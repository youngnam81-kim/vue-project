import{_ as o,c as f,a as e,b as n,w as u,q as m,n as N,l as p,t as i,f as d,o as b}from"./index-vUCBBhhV.js";const y={data(){return{isActive:!0,hasError:!0,classObject:{border:!0,bg:!0,"text-danger":!1},bgClass:"bg",erClass:"text-danger",isActive:!0,myWidth:200,chk:!1,firstName:"",lastName:"",firstName1:"",lastName1:""}},methods:{increWidth(){this.myWidth+=10},decreWidth(){this.myWidth-=10},mOver(){this.myWidth=200}},computed:{yesNo(){return this.chk?"참 말":"거 짓"},fullName0(){return this.firstName+" "+this.lastName},fullName1:{get(){return this.firstName1+" "+this.lastName1},set(a){const t=a.split(" ");this.firstName1=t[0],this.lastName1=t[t.length-1]}},test:{get(){return this.firstName+" "+this.lastName}}}};function v(a,t,g,x,l,s){return b(),f("div",null,[t[7]||(t[7]=e("hr",null,null,-1)),t[8]||(t[8]=n("css class 변경 방법 등...3항연산추가 ",-1)),e("div",{class:m(["border",{bg:l.isActive,"text-danger":l.hasError}])},"Warning",2),e("div",{class:m(l.classObject)},"Warning",2),e("div",{class:m(["border",[l.bgClass,l.erClass]])},"Warning",2),t[9]||(t[9]=e("hr",null,null,-1)),t[10]||(t[10]=n(" style bind 기술할때 v-bind:style or :style / style는 같은 속성일경우 마지막에 기술된것이 적용된다. ",-1)),e("div",{class:"demo",style:N([{width:"200px",height:"150px"},{width:"300px"}])}),e("div",{class:"demo2",style:N({width:l.myWidth+"px",color:"white"}),onMouseover:t[0]||(t[0]=(...r)=>s.mOver&&s.mOver(...r))}," 마우스 over 면 초기화 됩니다.",36),e("button",{onClick:t[1]||(t[1]=(...r)=>s.increWidth&&s.increWidth(...r))}," 누르면 width 증가"),e("button",{onClick:t[2]||(t[2]=(...r)=>s.decreWidth&&s.decreWidth(...r))}," 누르면 width 감소"),t[11]||(t[11]=e("hr",null,null,-1)),t[12]||(t[12]=n(" computed (종속 데이터 변경 시 자동 재계산, 또는 최초 렌더링 시) ",-1)),t[13]||(t[13]=e("br",null,null,-1)),u(e("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=r=>l.chk=r)},null,512),[[p,l.chk]]),n(i(s.yesNo)+" "+i(s.yesNo)+" "+i(s.yesNo)+" ",1),t[14]||(t[14]=e("br",null,null,-1)),n("fullName0 (Getter만) 이름 : "+i(s.fullName0)+" / "+i(s.test)+" ",1),t[15]||(t[15]=e("br",null,null,-1)),t[16]||(t[16]=n(" 성 : ",-1)),u(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=r=>l.firstName=r),placeholder:"성을 입력하세요"},null,512),[[d,l.firstName]]),t[17]||(t[17]=n(" 이름 : ",-1)),u(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=r=>l.lastName=r),placeholder:"이름을 입력하세요"},null,512),[[d,l.lastName]]),t[18]||(t[18]=e("pre",null,`computed: {
        fullName0() {
            return this.firstName + ' ' + this.lastName;
        },

        test:{
            get() {
                return this.firstName + ' ' + this.lastName;
            },
        }
    }
둘다 사용가능.    
`,-1)),t[19]||(t[19]=e("hr",null,null,-1)),t[20]||(t[20]=n(" fullName1 (Getter + Setter) 이름을 입력하세요. (성과 이름은 띄어쓰기) : ",-1)),u(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=r=>s.fullName1=r),placeholder:"이름을 입력하세요"},null,512),[[d,s.fullName1]]),t[21]||(t[21]=e("br",null,null,-1)),n("성 : "+i(l.firstName1)+" / 이름 : "+i(l.lastName1)+" ",1),t[22]||(t[22]=e("br",null,null,-1)),n("풀네임 : "+i(s.fullName1)+" ",1),t[23]||(t[23]=e("pre",null,`computed: {
    fullName1: {
        get() {
            return this.firstName1 + ' ' + this.lastName1;
        },
        set(newValue) { // fullName1 에 입력된 값을 param 으로 받아옴.(여기선 input text 에 v-model 선언되어 있음)
            const names1 = newValue.split(' ');
            this.firstName1 = names1[0];
            this.lastName1 = names1[names1.length - 1];
            //그러나 글자쓸때 무조건 반응 하므로  .split(' '); 에서 버그처럼 반응함.
        }
    },
}        
    `,-1))])}const h=o(y,[["render",v],["__scopeId","data-v-29c65106"]]);export{h as default};
