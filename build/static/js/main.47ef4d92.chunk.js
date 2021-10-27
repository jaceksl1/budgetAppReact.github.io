(this["webpackJsonpbudget-app-react"]=this["webpackJsonpbudget-app-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),i=n.n(a),o=n(0),r=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:"Control Your budget"})})};var l=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("p",{children:"Created by Jacek S\u0142omian"}),Object(o.jsxs)("div",{class:"contact-links",children:[Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/jacek-s%C5%82omian-759171b9/",target:"_blank",class:"btn contact-details",children:[Object(o.jsx)("i",{class:"fab fa-facebook-square"})," LinkedIn"]}),Object(o.jsxs)("a",{id:"profile-link",href:"https://github.com/jaceksl1",target:"_blank",class:"btn contact-details",children:[Object(o.jsx)("i",{class:"fab fa-github"})," GitHub"]}),Object(o.jsxs)("a",{href:"mailto:j.k.slomian@gmail.com",class:"btn contact-details",children:[Object(o.jsx)("i",{class:"fas fa-at"})," Send a mail"]}),Object(o.jsxs)("a",{href:"tel:691-247-642",class:"btn contact-details",children:[Object(o.jsx)("i",{class:"fas fa-mobile-alt"})," Call me"]})]})]})},j=n(5),b=n(8),u=n(2),d=function(e,t){switch(t.type){case"ADD_INCOME":return Object(u.a)(Object(u.a)({},e),{},{incomeTransactions:[t.payload].concat(Object(b.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(u.a)(Object(u.a)({},e),{},{expenseTransactions:[t.payload].concat(Object(b.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==t.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==t.payload}))});default:return e}},x={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},m=Object(c.createContext)(x),p=function(e){var t=e.children,n=Object(c.useReducer)(d,x),s=Object(j.a)(n,2),a=s[0],i=s[1];Object(c.useEffect)((function(){localStorage.setItem("incomeTransactions",JSON.stringify(a.incomeTransactions)),localStorage.setItem("expenseTransactions",JSON.stringify(a.expenseTransactions))}));return Object(o.jsx)(m.Provider,{value:{incomeTransactions:a.incomeTransactions,expenseTransactions:a.expenseTransactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addIncome:function(e){i({type:"ADD_INCOME",payload:e})},addExpense:function(e){i({type:"ADD_EXPENSE",payload:e})}},children:t})},O=function(){var e=Object(c.useContext)(m),t=e.incomeTransactions,n=e.expenseTransactions,s=t.map((function(e){return e.incomeAmount})),a=n.map((function(e){return e.expenseAmount})),i=s.reduce((function(e,t){return e+t}),0).toFixed(2),r=a.reduce((function(e,t){return e+t}),0).toFixed(2);return Object(o.jsxs)("div",{className:"balance",children:[Object(o.jsx)("h2",{children:"Your Balance"}),Object(o.jsx)("h3",{children:(i-r).toFixed(2)}),Object(o.jsxs)("div",{className:"income-expense",children:[Object(o.jsxs)("div",{className:"plus",children:[Object(o.jsx)("h3",{children:"Income"}),Object(o.jsxs)("p",{children:["+",i]})]}),Object(o.jsxs)("div",{className:"minus",children:[Object(o.jsx)("h3",{children:"Expenses"}),Object(o.jsxs)("p",{children:["-",r]})]})]})]})},h=function(e){var t=e.incomeTransaction,n=Object(c.useContext)(m).deleteTransaction;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("li",{className:"transaction",children:[Object(o.jsx)("span",{className:"transaction-text",children:t.incomeText}),Object(o.jsxs)("span",{className:"transaction-amount",children:["$",t.incomeAmount]})]}),Object(o.jsx)("div",{className:"btn-wrapper",children:Object(o.jsx)("button",{onClick:function(){return n(t.id)},className:"btn",children:"Delete"})})]})},f=function(){var e=Object(c.useContext)(m).incomeTransactions;return console.log(e),Object(o.jsxs)("div",{className:"transactions transactions-income",children:[Object(o.jsx)("h2",{children:"Income History"}),Object(o.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(o.jsx)(h,{incomeTransaction:e},e.id)}))})]})},T=function(e){var t=e.expenseTransaction,n=Object(c.useContext)(m).deleteTransaction;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("li",{className:"transaction",children:[Object(o.jsx)("span",{className:"transaction-text",children:t.expenseText}),Object(o.jsxs)("span",{className:"transaction-amount",children:["$",t.expenseAmount]})]}),Object(o.jsxs)("div",{className:"btn-wrapper",children:[Object(o.jsx)("button",{onClick:function(){return n(t.id)},className:"btn",children:"Delete"}),Object(o.jsx)("button",{className:"btn",children:"Edit"}),Object(o.jsx)("button",{className:"btn",children:"Ready"})]})]})},v=function(){var e=Object(c.useContext)(m).expenseTransactions;return console.log(e),Object(o.jsxs)("div",{className:"transactions transactions-expense",children:[Object(o.jsx)("h2",{children:"Expense History"}),Object(o.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(o.jsx)(T,{expenseTransaction:e},e.id)}))})]})},N=n(4),g=n(18),A=function(){var e=Object(c.useContext)(m),t=e.addIncome,n=e.addExpense,s=Object(c.useState)({incomeText:"",incomeAmount:0}),a=Object(j.a)(s,2),i=a[0],r=a[1],l=i.incomeText,b=i.incomeAmount,d=function(e){r(Object(u.a)(Object(u.a)({},i),{},Object(N.a)({},e.target.name,e.target.value)))},x=Object(c.useState)({expenseText:"",expenseAmount:0}),p=Object(j.a)(x,2),O=p[0],h=p[1],f=O.expenseText,T=O.expenseAmount,v=function(e){h(Object(u.a)(Object(u.a)({},O),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("div",{className:"form-wrapper",children:[Object(o.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==l){var n={id:Object(g.a)(),incomeText:l,incomeAmount:1*b};t(n),r({incomeText:"",incomeAmount:0})}},children:Object(o.jsxs)("div",{className:"input-group income",children:[Object(o.jsx)("input",{type:"text",name:"incomeText",value:l,placeholder:"Add Income...",autoComplete:"off",onChange:d}),Object(o.jsx)("input",{type:"number",name:"incomeAmount",value:b,placeholder:"Amount",autoComplete:"off",onChange:d}),Object(o.jsx)("button",{type:"submit",value:"Submit",children:"Add income"})]})}),Object(o.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==f){var t={id:Object(g.a)(),expenseText:f,expenseAmount:1*T};n(t),h({expenseText:"",expenseAmount:0})}},children:Object(o.jsxs)("div",{className:"input-group expense",children:[Object(o.jsx)("input",{type:"text",name:"expenseText",value:f,placeholder:"Add Expense...",autoComplete:"off",onChange:v}),Object(o.jsx)("input",{type:"number",name:"expenseAmount",value:T,placeholder:"Amount",autoComplete:"off",onChange:v}),Object(o.jsx)("button",{type:"submit",value:"Submit",children:"Add expense"})]})})]})},C=(n(15),function(){return Object(o.jsxs)(p,{children:[Object(o.jsx)(r,{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(O,{}),Object(o.jsx)(A,{}),Object(o.jsxs)("div",{className:"list-wrapper",children:[Object(o.jsx)(f,{}),Object(o.jsx)(v,{})]})]})}),Object(o.jsx)(l,{})]})});i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.47ef4d92.chunk.js.map