import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Col, Container, Image, Row} from 'reactstrap';
import Products from './components/product/ProductsComponent';
import UserOrdersComponent from './components/userOrder/UserOrdersComponent';
import OrdersComponent from './components/order/OrdersComponent';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import CarouselComponent from './components/CarouselComponent'
import Header from "./components/Header";

import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to={"/"} className="navbar-brand">
                                HOME
                            </Link>

                            <Header/>

                        </nav>
                        <br/>
                        <Container>
                            <Row>
                                <Col>
                                    <img width="479" height="105"
                                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd8AAABpCAMAAABMOtm2AAAAqFBMVEX///9ze4LkYDPmaT/Q0tT65eDIy87kYjbxsJ7kXi9weH/ri21tdX3kYzjkXCzwq5jndVH54Nn97+run4nqhmdocXnzvKzmbUf++fjytaL1x7r308jtmH/76uX99PF+hYzm6OnqjXTz9PSSmJ7g4uO4vL+lqq6GjZOvs7fZ292coabtlnv42dDpf17jViCNk5n2y7/oe1junofMz9FfaHHjUxnmcEziTQLryO2wAAAWz0lEQVR4nO1dCZeqOBbWUBqDBFcEN0Tct1Krpp3//8+GAGpuFqC6rekqn9+Zc6YfhkDxkbvnUir9iai+/dt38MJ34sXvc+PF73Pjxe9z48Xvc+PF73Pjxe9z48Xvc+PF73Pjxe9z48Xvc+PF73Pjxe9z48Xvc+PF73Pjj+c3DBjCMPy3b+R78CfzG24Wy9lqUi6XJ6vVcbtcV9+ejuUn4tdLUHB0WJ05jmWaZpnBZLAsxynPFptvvcv/M56B39ap15keXAPZNnWb5+6u0R+c9n7WKZtt2UqYFWFGx7fPs4x1/A5cLYxT/rReR8THXhhy6OpxbrrNQ3330eifWu3MC41PO5cignAMFIH9HyGYGofGsKJezeHSVJObwpnn/4W/BBp+vbqN1aCUDPKnHbxHz5gHsnfCEJtSpMP1YggRfB4NtDJ3P7pETCJkuJdz9Dp0Go3GqNu8XKK1TKKzbaPbaMknV8tWFrt/Ar+lfV2Dg1GAX6+OXXhak9qCwCT0ortGfJ2mi23bZivTdmtKhoeH6CUk7+eauMi9duvUHzVtO3pV7GajBU9bO9nsRvwGuX/hb8GX9e8QF+B3j0lPOtKHRwgWV7SM9rDXqBuEIqMn/TbeEYrxtK+X396w0UWIIhucvMxZvC9+8/n9QFRYrV4XdeEiLMJvfOa4f8YUf4j3cUGU1hXSF8CvNJoUvFnbfHpf/ObAN1BHPNYnBFpYRfllGCBM4OsxsCk5iyabEmMbcfwucoXzn8BvZyTxc0URfnuItsRjPhb4/Aq/pfaUoC4nEmqRzG4UOxXwO1fazaI1/fT8XoirO6EIv2d8kA+OkAtU5Zf4jRwugu7jB5FWlTWyGoDfmcivGcc0JpOJ4zjW1SV2nt3/bdKm7oQC/O5tWzHkhBA4+jV+S6X63WZrkUJOWgKe341IrzVZX8NVwWax3pYdxvGL30yM0FkVPHLpmf/nV/n1L9RIpvW6FPVzRt/B8ysuX3MpMBm+rVdl68VvFsYuUarGBrIr3D+/ym8kAEgt/o+e+lTPZ5AMao7fUDCurE/VdYKq9Qfzu8/lt0/ssep4ywAmEcGjAvfHwasncsF3KZac3nHv4xBHT7uNAbTtOH4/oW/kPEHsPQ86fqkd4R2sw7bLjqG8+JXncoaQzwvqKb5wvBAjvob9XuPPHv9lJ8D1Hr/aGU42YaHvHkE14Zdh176GoFnwmfL3zfG7Bvya28y/4zmg5tclLAgM11up3aQGpbnx5xPG9wTEns9FDBJ+UhAaw4CqdGwbNAVxO1DYejhe8l1qQPngdRBGBktIjEbdpoEMegAz3q4gqN/niTLroea336jVag0q83uJkJM/mmLOtxrwfrRv4Pr9X/FcLBMg8EvPu+m0fjDeIyP5AO20Or5Es9i0C6/YsTGp7VPR0N4PXA2/4YTn1zxm/hlPgoz4lU9EfuWolIzxOx96rgOTuYEMMe5RMYjA743vwQEhyGSfGO3SgAgCpGfjA6+PvQPW8CvYzqrbr26eq1Ing9/23+K3gdy79PQMg1+BLSRpzpae35K/wxiEIE+IVthLAhXzhbpgmev5BerXWqhuv+pYk9ly8c9Ed7BhmAfF3pQgmMfDc0eH0cCik17xaH79JuLM4iHGQ/7XSMIL47P4jWQBvOIQ0z3zroH1vMdCKMs7IzW/gZPPb2nDanYsx1zm1GIdJ3eU7yU98+qs7NxRni3e9MSFm8XEEkYHmoHctOVZVfX+fS4XC+nsR/M7sG1OBH9gOEWP2EM4PpPf0gED+b6neOh1UR1mGkSh73UNXqxr+V2r/4LPRElb5mQdqEcwzB2TQ3owrK7Esh/TssqTWVU5xXIij1YVB22WKxMMNK3yailSvFgGQSAdfTS/QDZG4hk60uMLEpzebH5HCMTBI3Gw9w9oCmaQ+I2cMp8V25WS/1U08tmcaf6Ea4opeqbbQDMGZJGvb8pi4qjTF5bCEwu2lrICTPLaNjNHMTB6b2aAy+BYWi7XofhHPZjfPYj7D23DgLGOERJ8m2x+d8xgviPSvy3/LLwiog6I0ZvurphStX1VLusKJe8FHqajKbWDpnjADm007Ko4K4Vr3WALmn3zlX5Wh2d4UQ23waokypwH8/uBeINqx9xbYFHtbaGMI5vfC0xEMfs5Wr8wOOlFMkIMZ/n/5Sq/qH3ldwUelTnRKcbtfZxZVsYw+UhYIggWZX3JnmSqzyfaKgNgFoTrjFnZzd0HV6vhbLEtiZbhY/n1EeLqLCouPV8oyMt7Z6hRs/lt2QS8HfXItZbkc8Q6bvbHMBTSmHKoX/2praDtVhqC+dVpWio/io+UOOwNqGbVDYj8bjJYszhdHR7zik3u8iWYhcto9YqS4rH89gjv0PQIOU0pBt5MH1Hg8mTyO8JAtXoE11kUWij0KX3YmNBpbZhb2l4VHhf//gMEPAGW/BrwmjwWA5+ZZSECv1VN6XXC2F1rBJPMKt7k5m5CaLHdlOYzUec8lN9obXEBqsgbcqPFBQV0G0H1mcGv90GIaH0PmAqXxPGwayNEbPvcOEl1IzzE/BHjTu0GvVlgUCD8vBCsqzCbCSgCNpmE3WtHglU+vbwQqi63S/FGH8vvkPCJ/T2Lb7ZtmPVlaXp+nen49Sq9JoYr1T/gy5gFUOTiH6/V6LoEYYSM5mgw1i5kqXwjEr/HhYphkIqwxFDmkRfPgZi4iE6wzHTHS7xUgSsWysI5HRmXCd1yz4p3JhklHLRmWY76Q/mdYoN7tI1YFHcpdF9OMLyo4dc7IIKF8HOPxNc/ifHJBF5l2DnHOxkI7Yolz1dI9RvxQzOXiofAUxg9Q/Ab70ibk+gAlAtWeV0NwjAI5m+L5dF0LMCv9I5Zzmq7XCzWy9kk8oSs2zjxnXHK2/VivT2K7pLK+7rhkfxWQMIpsmvZyu0JMUn/jPn4hMTve2zttv9r23WYx6hQGhfd+jatlzTwh72dYZNIVrtqitXFz6Y5WYuBAaj8HKCo+eXK7CGo14WikDBYH7mzF5INwLk04eI4UY8zy8tbIdFCsL4tZfgkwSP5rbHw8A0nO040tKlQK9BAiHv0Ir/t6TRencOToGTbF5omLurYEDPDPLxWf+oSjGj3JFcJ6RQlCxcITwmaTJOAm4RXjMy+WYK1roiL3QkXfXBrFsCh6XsWZA0LYRG33tF7LL8u5uOC11BGl4KyHBZP4qYR+dWhcsbX5OIJ5ZbGjgcHGgnqsyzI51pD13TKVfCcwEPkTSTe+GKhi5CX5eYq884ETe1oDHhBOkvD4OrWhVpLD+X3BNL3YzctkhoI07As7n1hFeS3hyi6aeMzJZlmcnL93sXG9kEa+Jble5Z5WyucgB+D2w+8BrXmwsCMZ80gqE6dZJ3DBSrPKfjbgTTgOu5x/E4Rbw9FzswpPY1CO2nAF8oW4dcfdpFB6zeBPcTCjGp4g3MkpqUlnBVcYP7SfSRQq/e4Usiv1mMoyFxNWioFFPrK0EkMIPGVkfJcnZD+DQ/jt0JBsOlAmS09HgyYqASryMNcGUcuv+NTp/mODIO3wj8IKlR76XcoxdL0wSojGGE63DOfKeUuT3vMJuQ3c/2CCJo2fiZkQsqBagiQLqZiRHKzD+O3gwhnErVoHJtwbUKouBtphN9vI/P49caV4aB2sBElndtJXhehbva+7xT7JibyTVf14V+2hG+mNFDWN8cUxCbZQa0glxCAkfr6TSg51G8MUMGWbqqH8eu7fOg5sqUNFofsGDGgBb3Hd5epoP5t11yC7oVf3hRht9AOBr9JFZspwm3GFm/zXnjHL7crG4GUWoB5C1OKdt3xBm1y7TjgI2t2Q0GpoZP0D+M30qp8mm5ciXsjeJUEIKLkdfFNfxa1n0vjDuW2EHsfhOIPZZm1gNZFLLeMEaxVWdUrwcF1FG9JpYqVt4DN5OnBvIVpaQsD1mqNLgJ4cVqDfFtk0MP4PcNUbSa4Mo7C/EbL/oI5Dd9DCJFRvh1dGiIx4ZQgXGhTq7HVFIPzkdIlwi/WqwIVYxaWOVkoq3JAUMzUNuoBYTbtawCEuG5LzaP43dvijv0M+BRfH/kX+GUBaO4i0YJGCB8GuYu4gRQFAAzh23aiXsQ3lcftJ02T9Pyzvw4LJIPNtMzVUuYPKmptVAIwp30NwFV1uvxR/HbQpYi0TDG6FVnK/Ga0sWqfMS9rKyODYHIZ9fQJhXhCgru630JNTY0ZpAPumjDlF0hFeRRPsSNGPYHKzAiEADHOR84geH51q/xB/LahdZWHE7kuRJFfv562SJqOanJ8sWVAWTvuu3G0udnJWsYd9J7hLs+XClvrZq9s7rU6Mb/A+b0F9gONT21ZK371zQG/+rQA8Mv0wUflDQt4EL99YhdQhXcYNC2ck+LPRuSyXntZ0ZrIS48goSnDvhFJ7WgwdkcnTburPc3WHcFSpue2hfBm6iRJel50OvfSHbFy4E6PxdXogcxvhqNcyLyC0l73tjyI37NeBCrRQHbCk8SvSy+Hc4TmhUY+70Fg0wNbXBL4lV79QgnGxO12VEUc/jkvsRlsRQ16ixzebKdkhfDi2eJm0NfnmHffdFMs5gSJy+BXKUsgHsPvUBEHzETrGvOQ+U3/7bX3fRdRLMjdGqGqwIa/73fTdld9WRZPpZIeCVLpzvV53XRmrOF4mwYS9Kb3qG/ZgWJ2MRS8Rdevptr3MfzWQWK/CKY46cah5TfGCNMznLhi6N+kfaNrsMSg1A2tgdzcePWnUHt3FMNV8WZw4AlB4ynQx0zMVBgUlc+Q30L691v5bYOU39UCFgBPSbPDOfxGBIvRp0gT9ATc04/euNfFlEyFJd5TL3oIIfV/M1uvKYE4jHTknV9xhmBtaoImVjIZtK+0yQXoRuntK14lfKt8joQmb111VK1DD7Aaw0+TxTn8jl1R30ZLGna2JO/wDTgdEBGyDwNC8p03IYpcDm7H0xbCJShgHVVub7NcKXcbJE8fJO21+ydKJVhYp9vrFv6/+PWbwGupYEXjUIwEnpLqrDx+Sx+iX93DBoAr9xMYYQQDGidNxwiIJYwyzuHxmA5+jWvWVThfHOXew8kChq9QwfCzNr4Bsh86af8Ifk/XVG+CGjFGEs5if9FWMnsev9KWYa8N0bIlfj0My+KLrV+xJuLGbyKgY3OIf+x68VoKqmLoMzWmCsavYJhaVwNQLTLqEfx28YXXrk1VclbalV1qUlTK57cmbwmH8GV+S4YQbOkRuSGLDKFK7sZvmoydw10pOT2EN7DAJm0WABem9tGDPjBaOQ7kja7l3gP43cNuVJGvpGjgML5gIco/iIulvyyfRaj4FXalFrKfpSxBcPuBGVWxNcXvS9JL1wQhsNfSKBRYmHoJAOww4GbzF4Ba+vvyCx0EnNQOclW+0hQLabqI8Z2Xx6/fxDmuq4LfPRLiVbt8/7ck6l8u7MtYiXcpiIUb2QClmsl0GxAFMbXlG4A6R62AN4UW+QP4RcDE9bA6Et2TBPQIR+9FDr89ou6VdoeC3w+4bYkVyxdotQUrUnm3881MUglggQe5E0J5H4tzaGDp3xG49tWm8axQsOSf8wv3lLHGvUqF6SOx7U3LjubP5vdEqZEjWWV+G7ZgAETXKJC7hP4v/1DD9J+886t3bm4A0apUnW91MkI4Fa5z1QKGMvyWyRLxj/kV9/NNRUfoip1Ylu4d8NkT++fw/I4bimZbY0Ed+zZutG9dCT1/2KXUhRfqoTT5EWQV+isN3gQTk6VX+SdapPXdm8KLFeondSkkoeJH1ckJmmraIKaa3wELC9Wk/ld4OpTQg433Kwats5PhGt5HR3ZUjCz2Ee33JH7xNIlK1UYGEh0dZioJ9XL+X5G33WQ3WonOmTYJRe9CUuJMcfIfwX/K0j6UFGLfb2CPLq1VCSzwjKAhNyUQCOl88Cr6sikrZxi8X215nbZ/Hdv4Lvevo7YEQkEr/sifYfGldygQG++sjJIKXaF9myIi54+u8SmE7Kko6lvvhvEOghdep2kT+4MRzc7BCHcEX2h/2yUeOGWrvFrILYY2UmNZsCCq8XLln6eg7pRsw/nSIYKRbq01L4rwHojRiwWMxei1ha7/pKHoPxkdVQAK7bhHJREVXgOxj0/ZfwlPvs5iURK/aVzq0u3I/fejiSRlyjYc9Zm4p4Z7rjckd2qKr/I6zv6YlrXaLjbclqDqTI43AQI3zBnid6WI3uZK3ngr+EJXBqT9R0dBoGyS3WlCPssCfUBCoRGBxsKO59Hw6+6Z8AV6zGspAT4U5scyeyDzi3psQnHP2J6dDw7eLlJRFd20DINqjSU/OkkRxjiR2xt4ze6Zcdf21Wy7XC+PZUXA2ITuZBiUgPskKUTLclaw80UwgwL0pvml/YPOrBqkl5lXl2UnNZUEiWI66+sruVmKwbGMUNqX+wMXQVvm92vlHRr4TUo6OcUY0r1c6O27ALAOLt5Vrf6QmSLaxxfmSH2jnbQn1WIef4o0eJMqQm7vS6j4REB5Er1r22PSDivNNUklP5YZj5pNxB+ytg9+D7/j7+HX61K8a5Gv8dvl6tvlOkc1VHZtNSO1kGZy4r537Fukplizx+vPQJElTnb7J/99lf1v8s3yw+4HtX2e4tv+Pfz6dUSNduUrhbisDp5zhgvyq7SOuWUnyUMwr8yAIO61tVopv/Ni4253k+mq/R5+WxdE3RbrmVSc33aXEM4dL8avol8OdH5N0cfa5M0LH/JCqROuuBtL1cxx6b2Usz3x38Kv36c0MvpKX+J371JU58y/Qvyq+5VwZpHsjbxlrzRJmy+yGiRxyv0za1xyL5OcQMvv4NfrHQhFZ+b6tOyiXz7yG5jC2FoBfiM7VTlZFl3ZktS0ZP24ydjAyE+fuZU1tr3z4iy/gF9/2MGEYjsJUrRsAzX7+bO1awhdz7kil1/TkhqEJQC7UqRnKvo8cMZAMV+41i5N2KAwq+2htcqIt6b4wf6R5/vtcavWdTGmmO5SX7xiEEqRcZn2WvptKe391EDR4hUCJOGqbOpFXvTTRPfA+NikbFxrm4Wa+hk3R1P9VgixqvlWfcsmbCahgza+0a/9fTRkfvGHdnRSsNwafUDs6uwz3gRRipGxu78e40HdQIhFMS/1j9pgL4Q0vNagMW0SjPBZ8V1o1iibNaQSjNw44LFaax0NPuqkyOYEi23ZcYRJ2ZyzLO04X7LQCjwlOqcsvhHBeiKNsxx1WzYJ2u/jIESUn9ZWHhUPKuKTWDtBEgUd2upPeBPbGA2EHKF/apxtO/kSu23b7mE6Yp+AH+3qTYN9Ehohm36o9wzGD+xzsZytJmWLfXLQinzWyWqW3a6d252gS9WEb9Gkx0nZTOa0JsdlNY+BcLNmp1jsFMeJPOfjTP2OzdfbVTmeOBm3/CzapV/N71kVaP4KBBuohjPGurEUHcpDLof6riN9BSmFP6ztzqyXGY43LN3fCWLTQ+eUW6/B2stt3qoRNkHuNw24eG9m4UYYJpN+Fv9OQnwKu4s49JV1v2xU9S0eV2xqBjW/48o/BVxx7ayhiYD15B/G8sfmSsK0+0Hto36+uAkul8O009tXChRbfQmgtCN48OTfiy9/3/lnQv3pwUdhkWld/Wg8Cb/fC65S7rd9s/DFbz7AR7//7Zv5Il785oPL1Bcoi/1ZePGbC1DU+tu+SfniNxdcIvb3fZPyxW8uOOfXEQs3fjxe/OaB6xmZWQnzM/HiNw9c8i+rkO2H4sVvHritBLpNmD8YL35zwHcozG69/yPx4jcHXGwy6zslPxUvfnPAO7+/zrp68ZsHrjTyt6UWYrz4zQa3K0VRJ/fz8efw+z+kRAoeV/MPQwAAAABJRU5ErkJggg=="
                                         alt="Logo"/>
                                </Col>
                            </Row>
                        </Container>;
                        <Switch>
                            <Route exact path="/" component={CarouselComponent}/>
                            <Route exact path="/signup" component={SignUp}/>
                            <Route exact path="/signin" component={SignIn}/>
                            <Route path='/orders/:userOrderId' component={OrdersComponent}/>
                            <Route path="/products" component={Products}/>
                            <Route path="/userOrders" component={UserOrdersComponent}/>
                        </Switch>
                    </div>
                </Provider>
            </Router>

        );
    }
}


export default App;
