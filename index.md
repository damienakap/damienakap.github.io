---
layout: default
author: Damien Apilando
title: damienakap
---
<style>
  .project_card {
    display: grid;
    background-color: var(--theme_dark_1);
    margin-top: 1em;
    overflow:hidden;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    height: auto;
    width: 100%;


  }
  
  .project_card_link{
    display: grid;
    align-self: center;
    justify-self: center;
    width: auto;
    height:20em;
    overflow:hidden;

    transition: height 1s;
  }
  .project_card_image {
    align-self: center;
    justify-self: center;
    height: 100%;
  }
  .project_card_wrapper {
    max-width: 100%;
    max-height: 100%;
    padding: 1em;
    background-color: var(--theme_dark_2);
    color:white;
  }
  .project_card_wrapper > h2 {
    line-height: 0;
  }

  @media only screen and ( min-width: 768px) {
    .project_card {
      grid-template-columns: 50% auto;
    }

    .project_card_link{
      height: 20em;
    }
  }

  @media only screen and ( min-width: 1024px) {
    .project_card {
      grid-template-columns: 60% auto;
    }
    .project_card_link{
      height: 30em;
    }
  }
</style>

<div class="project_card">
  <a href="" class="project_card_link">
    <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="project_card_image"/>
  </a>
  <div class="project_card_wrapper">
    <h2>Project 1</h2>
    <p>Here is where the description of a project would go. It should only be a short summary, with a link to a dedicated project page.</p>
  </div>
</div>

<div class="project_card">
  <a href="" class="project_card_link">
    <img src="https://live.staticflickr.com/1456/26264880836_e5627524ab_b.jpg" class="project_card_image"/>
  </a>
  <div class="project_card_wrapper">
    <h2>Project 1</h2>
    <p>Here is where the description of a project would go. It should only be a short summary, with a link to a dedicated project page.</p>
  </div>
</div>
