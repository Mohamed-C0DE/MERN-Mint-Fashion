import React from "react";

const Story = () => {
  return (
    <section className="w-5/6 max-w-fit mx-auto flex justify-center flex-col">
      <h2 className="text-center text-2xl pb-2">Our Story</h2>
      <div className="flex flex-col lg:flex-row">
        <img
          className="lg:w-1/2 lg:max-w-3xl"
          src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
          alt=""
        />
        <p className="pt-2 lg:pt-0 lg:w-1/2 lg:pl-3 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pellentesque erat non odio commodo, sit amet lobortis arcu molestie.
          Praesent mattis lorem id magna ultricies mattis. Curabitur posuere
          risus nibh, eu posuere dui varius id. Mauris blandit a diam ac
          interdum. Praesent ac vulputate enim, eget feugiat diam. Maecenas
          facilisis fermentum tortor nec scelerisque. Pellentesque a dictum
          orci. Donec sed nisl in ipsum molestie placerat cursus tristique
          felis. In a nisi vehicula, vulputate erat vitae, iaculis orci. Donec
          volutpat, nisi ac sollicitudin egestas, dui quam porttitor lorem, in
          porta sapien lectus nec enim. Vivamus metus dolor, rutrum ut erat id,
          lacinia sagittis dui. Praesent justo tortor, venenatis tempor bibendum
          non, maximus non libero. Duis dapibus dui erat, quis luctus nulla
          efficitur eu.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pellentesque erat non odio commodo, sit amet lobortis arcu molestie.
          Praesent mattis lorem id magna ultricies mattis. Curabitur posuere
          risus nibh, eu posuere dui varius id. Mauris blandit a diam ac
          interdum. Praesent ac vulputate enim, eget feugiat diam. Maecenas
          facilisis fermentum tortor nec scelerisque. Pellentesque a dictum
          orci. Donec sed nisl in ipsum molestie placerat cursus tristique
          felis. In a nisi vehicula, vulputate erat vitae, iaculis orci. Donec
          volutpat, nisi ac sollicitudin egestas, dui quam porttitor lorem, in
          porta sapien lectus nec enim. Vivamus metus dolor, rutrum ut erat id,
          lacinia sagittis dui. Praesent justo tortor, venenatis tempor bibendum
          non, maximus non libero. Duis dapibus dui erat, quis luctus nulla
          efficitur eu.
        </p>
      </div>
    </section>
  );
};

export default Story;
