import React from 'react'

export default function AboutUs() {
  return (
      <div className="py-36 bg-base-200">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/Images/log.png"
                          alt="image"
                          className='rounded-lg'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Welcome to our Tax Calculator project!
                      </h2>
                      <p className="mt-6 text-gray-600">
                      We are a dedicated team passionate about creating innovative solutions for simplifying financial processes. This platform was designed to assist users in accurately calculating their taxes with ease. We have developed this platform to simplify the complex process of calculating taxes for individuals and businesses. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Our goal is to provide a user-friendly and efficient tool that allows users to compute their taxes based on different income sources such as salary, business, property, capital gains, and other sources. By combining technology with an intuitive interface, we aim to empower users with accurate tax information while saving time and effort. This project reflects our commitment to making financial calculations more accessible and stress-free for everyone.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}