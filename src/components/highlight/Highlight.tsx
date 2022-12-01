import React from 'react'

function Highlight() {
  return (
    <div className="h-[40rem] p-10 pt-2 flex flex-col md:flex-row justify-between">
        <img src={require("../../assets/banners/BannerWarm.jpg")} alt="test" className="max-h-96 rounded-xl shadow-2xl mx-auto"/>
        <h1 className="text-2xl font-bold">
            Some Title
        </h1>
        <div className="max-w-sm text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo quod adipisci aut debitis mollitia nobis beatae alias, illum temporibus ea nisi cum? Et ad dolore molestias magni reiciendis. Veniam, perspiciatis obcaecati eligendi aspernatur porro facere earum dolore voluptates id possimus recusandae laudantium sint repellat illo maxime quam distinctio incidunt.
        </div>
    </div>
  )
}

export default Highlight