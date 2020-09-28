import { withStyles } from '@material-ui/core';
import React from 'react'

import style from './style'
class DetailTable extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <table class="" cellspacing={0} border={1}>
                <tbody>
                    <tr style={{height:'22px'}} >
                        <td
                            style={{fontFamily:'標楷體',fontSize:'12px',borderBottom:'2px solid',borderBottomColor:'#000000',minWidth:'50px'}}
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            style={{fontFamily:'標楷體',fontSize:'12px',borderBottom:'2px solid',borderBottomColor:'#000000',minWidth:'50px'}}
                            colspan={5}>
                            <nobr>客戶:Bailey's(9904)</nobr>
                        </td>

                        <td
                            colspan={13}>
                            <nobr>FM-025</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>派工號：</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={8} rowspan={3}>
                            <nobr>B 式 派 工 單</nobr>
                        </td>
                        <td
                            colspan={7}>
                            <nobr>製表日期：109/1/21</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4} rowspan={2}>
                            <nobr>20005-B</nobr>
                        </td>
                        <td
                            colspan={7}>
                            <nobr>開工日期：</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={7}>
                            <nobr>出貨日期：109/3/31</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={3}>
                            <nobr>品名：</nobr>
                        </td>
                        <td
                        >
                            <nobr>序號</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>品號</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>Bailey's品號</nobr>
                        </td>
                        <td
                        >
                            <nobr>烤漆 顏色</nobr>
                        </td>
                        <td
                        >
                            <nobr>訂單量(支)</nobr>
                        </td>
                        <td
                        >
                            <nobr>派工量(支)</nobr>
                        </td>
                        <td >
                            <nobr>派工區分</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={3} rowspan={3}>
                            <nobr>替換式實體導板</nobr>
                        </td>
                        <td
                        >
                            <nobr>1/1</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>F28-B9-50A-QD-1</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>WPPM 28 SS50</nobr>
                        </td>
                        <td
                        >
                            <nobr>3U</nobr>
                        </td>
                        <td
                        >
                            <nobr>50</nobr>
                        </td>
                        <td
                        >
                            <nobr>33</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr> 量產品 試作品 重工品 開發品 其他</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>分發單位：計 張</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={3} rowspan={3}>
                            <nobr>機種：</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>生產部 管理部 </nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>生管課 業務課 </nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>製一課 生技課</nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>製三課 製二課</nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>資材課 製四課</nobr>
                        </td>
                        <td rowspan={2}>
                            <nobr>品管課 採購課 </nobr>
                        </td>
                        <td
                            rowspan={2}>
                            <nobr> 電腦課 </nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={4}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2} rowspan={20}>
                            <nobr>製 作 流 程</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>工程 NO</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>1</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>2</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>3</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>4</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>5</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>6</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>7</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>8</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2}>
                            <nobr>生產日期</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>製程</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>發料</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>沖尾端孔</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>油壓壓平</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>退火</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>氧化膜磨除</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>銑削加工</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>IQC</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>油孔毛邊磨除</nobr>
                        </td>
                    </tr>
                    <tr ></tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>生產單位</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>資材</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>託外</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>品管</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製造</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>工程 NO</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>9</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>10</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>11</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>12</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>13</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>14</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>15</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>16</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2}>
                            <nobr>生產日期</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>製程</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>本體熱處理</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>IQC</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>油壓壓平</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>退火</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>平直度檢查</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>淬火</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>回火</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>平直度檢查</nobr>
                        </td>
                    </tr>
                    <tr ></tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>生產單位</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>託外</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>品管</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>工程 NO</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>17</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>18</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>19</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>20</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>21</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>22</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>23</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>24</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2}>
                            <nobr>生產日期</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>製程</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>惰孔鉚合</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>表面研磨</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>烤漆 </nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>IQC</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>磨槽 (視狀況)</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>網印</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>入鼻端側板替換組及鉚釘</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>導板及側板鉚合</nobr>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>生產單位</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製一</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>託外</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>工程 NO</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>25</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>26</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>27</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>28</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>29</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>30</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>31</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>32</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2}>
                            <nobr>生產日期</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>製程</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>平直度檢查</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>雷射雕刻</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr> 包裝</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>成品檢驗</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>出貨</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>生產單位</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>製二</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>品管</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>業務</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2} rowspan={16}>
                            <nobr>注 意 事 項</nobr>
                        </td>
                        <td
                            colspan={2}>
                            <nobr>項次</nobr>
                        </td>
                        <td
                            colspan={16}>
                            <nobr>說 明</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2} rowspan={7}>
                            <nobr>1</nobr>
                        </td>
                        <td
                            colspan={16}>
                            <nobr>a.序號1 領庫存 F28-B9-63-QDG-1-1 (已沖切外形) 135 支(SAE5160)，從製程2開始生產。</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr> 33支跑完全程,另102支做至油孔毛邊磨除，防锈入庫。</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>b.領側板 3-22-01 100 支，F28-B9-50-QDU-1 23 支</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>c.製程13 導板入清洗機清洗完成後，需以噴槍將水份吹乾再回火。</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2} rowspan={2}>
                            <nobr>2</nobr>
                        </td>
                        <td
                            colspan={16}>
                            <nobr>序號1 雷射雕刻號碼 Bailey's品號</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr> ⅹⅹ(期碼)</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2} rowspan={5}>
                            <nobr>3</nobr>
                        </td>
                        <td
                            colspan={16}>
                            <nobr>序號1 圖面編號:MBA-A-07 網板編號: BA-A-07 網印顏色:Orange 021C 包裝方式:B 箱號: A30-A34</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={16}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            colspan={2}>
                            <nobr>4</nobr>
                        </td>
                        <td
                            colspan={16}>
                            <nobr>依客戶資訊所示。</nobr>
                        </td>
                    </tr>
                    <tr>
                        <td
                        >
                            <nobr>備註： </nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={3}>
                            <nobr>生產部(經)副理</nobr>
                        </td>
                        <td
                            colspan={3}>
                            <nobr>管理部經理</nobr>
                        </td>
                        <td
                            colspan={3}>
                            <nobr>生管</nobr>
                        </td>
                        <td
                            colspan={3}>
                            <nobr>製表</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={3} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={3} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={3} rowspan={2}>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={3} rowspan={2}>
                            <nobr>蔡淑薇</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td
                            rowspan={16}>
                            <nobr> 檢查 入庫 託工</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                        >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td
                            colspan={5}>
                            <nobr>正嘜</nobr>
                        </td>
                        <td
                            colspan={5}>
                            <nobr>側嘜</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>BAILEY'S </nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>SOLID BAR</nobr>
                        </td>
                        <td colspan={9}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>OAKLAND</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>P.NO.:</nobr>
                        </td>
                        <td colspan={9}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>C/NO.:</nobr>
                        </td>
                        <td >
                            <nobr>Q'TY: </nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr> PCS</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={9}>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>MADE IN TAIWAN</nobr>
                        </td>
                        <td >
                            <nobr>N.W.:</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>KG</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td colspan={5}>
                            <nobr>R.O.C.</nobr>
                        </td>
                        <td >
                            <nobr>G.W.:</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td >
                            <nobr>KG</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                        <td>
                            <nobr>&nbsp;</nobr>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default withStyles(style, { withTheme: true })(DetailTable)