# 专项训练

<div class="plan-box box1">
  <div class='img-box'>
    <a href="./top_150_list.html">
      <img class="plan" src="../image/plan-2.png" alt="top150"/>
    </a>
  </div>
  <div class='img-box'>
    <a href="./top_200_list.html">
      <img class="plan" src="../image/plan-1.png" alt="top200"/>
    </a>
  </div>
</div>
<div class="plan-box box2">
  <div class='img-box'>
    <a href="./top_300_list.html">
      <img class="plan" src="../image/plan-5.png" alt="top_300"/>
  </a>
    </div>
  <div class='img-box'>
    <a href="./company_list.html">
      <img class="plan" src="../image/plan-6.png" alt="company"/>
  </a>
    </div>
</div>
<div class="plan-box box3">
  <div class='img-box'>
    <a href="./offer_list.html">
      <img class="plan" src="../image/plan-7.png" alt="offer"/>
    </a>
  </div>
  <div class='img-box'>
    <a href="./offer2_list.html">
      <img class="plan" src="../image/plan-8.png" alt="offer2"/>
    </a>
  </div>
</div>
<div class="plan-box box4">
  <div class='img-box'>
    <a href="./codetop_list.html">
      <img class="plan" src="../image/plan-3.png" alt="codetop"/>
  </a>
    </div>
  <div class='img-box'>
    <a href="./rabbit_list.html">
      <img class="plan" src="../image/plan-4.png" alt="rabbit"/>
    </a>
  </div>
</div>

<style>
.plan-box {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.img-box {
    margin: 10px 15px;
    border-radius: 5px;
    overflow: hidden;
    aspect-ratio: 900/383;
}
.img-box:hover {
  box-shadow: 0 2px 12px #f0f1f2;
}
.plan {
    cursor: pointer;
    transition: all 0.6s;
    border-radius: 5px;
    overflow: hidden;
}
.plan:hover {
  transform: scale(1.05);
}
@media screen and (max-width: 900px) {
  .plan-box {
    margin: 0;
    display: block;
  }
  .img-box {
    margin: 15px 0;
    width: 100%;
  }
}
</style>
