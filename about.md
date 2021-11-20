---
layout: default
author: Damien Apilando
title: About
---
<style>
  .about_card {
    display: grid;
    background-color: var(--theme_dark_1);
    margin-top: 1em;
    overflow:hidden;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    height: auto;
    width: 100%;
  }
  
  .about_card_image_wrapper{
    display: grid;
    align-self: center;
    justify-self: center;
    width: 100%;
    height:auto;
    overflow:hidden;
  }
  .about_card_image {
    align-self: center;
    justify-self: center;
    width: 100%;
  }
  .about_card_wrapper {
    max-width: 100%;
    max-height: 100%;
    padding: 1em;
    background-color: var(--theme_dark_2);
    color:white;
  }
  .about_card_wrapper > h2 {
    line-height: 0;
  }

  @media only screen and ( min-width: 768px) {
    .about_card {
      grid-template-columns: 40% auto;
    }
    .about_card_image {
      min-width: 100%;
      width:auto;
      min-height: 100%;
    }
    .about_card_image_wrapper{
      height: 25em;
    }
  }
</style>

<div class="about_card">
  <div class="about_card_image_wrapper">
    <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="about_card_image"/>
  </div>
  <div class="about_card_wrapper">
    <h2>Damien Apilando</h2>
    <p><small><em>User Experience Designer</em></small><br/><br/>
      I am an aspiring UX Designer and currently working on completing the UX Designer Certification Course by Google. I am also finishing my 4-year degree program at the University of Hawaii at Manoa.
    </p>
  </div>
</div>
