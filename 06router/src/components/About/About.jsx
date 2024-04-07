import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Just a keen developer learning new things
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React.js, developed and maintained by Facebook, is a powerful JavaScript library for building user interfaces, particularly single-page applications where content is dynamically updated without requiring a full page reload. Launched in 2013, React has gained widespread popularity for its declarative and component-based approach to UI development. One of its key features is the Virtual DOM, which efficiently updates only the necessary parts of the actual DOM, optimizing performance and providing a smoother user experience.
                      </p>
                      <p className="mt-4 text-gray-600">
                      React.js, developed and maintained by Facebook, is a powerful JavaScript library for building user interfaces, particularly single-page applications where content is dynamically updated without requiring a full page reload. Launched in 2013, React has gained widespread popularity for its declarative and component-based approach to UI development. One of its key features is the Virtual DOM, which efficiently updates only the necessary parts of the actual DOM, optimizing performance and providing a smoother user experience.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}