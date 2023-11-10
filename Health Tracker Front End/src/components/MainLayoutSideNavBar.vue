<template>      
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <form action="#" method="GET" class="md:hidden mb-2">
        <label for="sidebar-search" class="sr-only">Search</label>
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="sidebar-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
      </form>
      <ul class="space-y-2">
        <!-- Overview -->
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M20 20H4V4"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4 16.5L12 9L15 12L19.5 7.5"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="ml-3">Progress</span>
          </a>
        </li>

        <!-- Activities -->
        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M15 7C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5C13 6.10457 13.8954 7 15 7Z"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.6133 8.26691L9.30505 12.4021L13.4403 16.5374L11.3727 21.0861"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.4104 9.5075L9.79728 6.19931L12.6132 8.26692L15.508 11.5752H19.2297"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.89152 15.7103L7.65095 16.5374H4.34277"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Activities</span
            >
          </button>
        </li>

        <!-- Fitness Goals -->
        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-sales"
            data-collapse-toggle="dropdown-sales"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.5 15L12.5 13.5V18.5"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Fitness Goals</span
            >
          </button>
        </li>

        <!-- Food Items -->
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M12.1471 21.2646L12 21.2351L11.8529 21.2646C9.47627 21.7399 7.23257 21.4756 5.59352 20.1643C3.96312 18.86 2.75 16.374 2.75 12C2.75 7.52684 3.75792 5.70955 5.08541 5.04581C5.77977 4.69863 6.67771 4.59759 7.82028 4.72943C8.96149 4.86111 10.2783 5.21669 11.7628 5.71153L12.0235 5.79841L12.2785 5.69638C14.7602 4.70367 16.9909 4.3234 18.5578 5.05463C20.0271 5.7403 21.25 7.59326 21.25 12C21.25 16.374 20.0369 18.86 18.4065 20.1643C16.7674 21.4756 14.5237 21.7399 12.1471 21.2646Z"
                stroke="#000000"
                stroke-width="1"
              ></path>
              <path
                d="M12 5.5C12 3 11 2 9 2"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Food Items</span>
            <span
              class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800"
            >
              4
            </span>
          </a>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-authentication"
            data-collapse-toggle="dropdown-authentication"
          >
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              stroke-width="1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M8.5 4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H12"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
              ></path>
              <path
                d="M15.5 4H18C19.1046 4 20 4.89543 20 6V15"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 6.4V4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9.00422 3.77604 9.05152 3.50398C9.19968 2.65171 9.77399 1 12 1C14.226 1 14.8003 2.65171 14.9485 3.50398C14.9958 3.77604 15.2239 4 15.5 4C15.7761 4 16 4.22386 16 4.5V6.4C16 6.73137 15.7314 7 15.4 7H8.6C8.26863 7 8 6.73137 8 6.4Z"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
              ></path>
              <path
                d="M15.5 20.5L17.5 22.5L22.5 17.5"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Metrics</span
            >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Sign In</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Sign Up</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Forgot Password</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 2V6"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="ml-3">Workout Plans</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <svg
              width="35px"
              height="35px"
              stroke-width="1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M8 14L16 14"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 10L10 10"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 18L12 18"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 3H6C4.89543 3 4 3.89543 4 5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5C20 3.89543 19.1046 3 18 3H14.5M10 3V1M10 3V5"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="ml-3">Meal Logs</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
    >
      <a
        href="#"
        data-tooltip-target="product-website"
        class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          width="25px"
          height="25px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.5 12.5L8 14.5L7 18L8 21"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
      <a
        href="#"
        data-tooltip-target="dx-portal"
        class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          width="25px"
          height="25px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M13.5 6L10 18.5"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.5 8.5L3 12L6.5 15.5"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.5 8.5L21 12L17.5 15.5"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
      <a
        href="#"
        data-tooltip-target="terms-service"
        class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          stroke-width="1"
        >
          <g clip-path="url(#clip0_3787_399)">
            <path
              d="M17.6744 11.4078L15.7691 17.1236C15.7072 17.3094 15.5586 17.4532 15.3709 17.509L3.69348 20.9807C3.22819 21.119 2.79978 20.6763 2.95328 20.2158L6.74467 8.84167C6.79981 8.67625 6.92419 8.543 7.08543 8.4766L12.472 6.25859C12.696 6.16636 12.9535 6.21785 13.1248 6.38913L17.5294 10.7938C17.6901 10.9545 17.7463 11.1922 17.6744 11.4078Z"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.2959 20.6016L9.65986 14.2376"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.4029 3.18183L20.7666 5.54552C21.4727 6.25158 21.4893 7.3911 20.8042 8.11745C20.0901 8.8744 18.8919 8.89188 18.1561 8.15608L15.7924 5.79239C15.0766 5.07655 15.0708 3.91775 15.7795 3.19485C16.4982 2.46172 17.677 2.45587 18.4029 3.18183Z"
              fill="#000000"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.7814 12.1159C11.1956 11.5301 10.2458 11.5301 9.66004 12.1159C9.07426 12.7017 9.07426 13.6514 9.66004 14.2372C10.2458 14.823 11.1956 14.823 11.7814 14.2372C12.3671 13.6514 12.3671 12.7017 11.7814 12.1159Z"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_3787_399">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        href="#"
        data-tooltip-target="get-support"
        class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <svg
          width="25px"
          height="25px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 15.4384V13.5616C2 12.6438 2.62459 11.8439 3.51493 11.6213L5.25448 11.1864C5.63317 11.0917 6 11.3781 6 11.7685V17.2315C6 17.6219 5.63317 17.9083 5.25448 17.8136L3.51493 17.3787C2.62459 17.1561 2 16.3562 2 15.4384Z"
            stroke="#000000"
            stroke-width="1"
          ></path>
          <path
            d="M22 15.4384V13.5616C22 12.6438 21.3754 11.8439 20.4851 11.6213L18.7455 11.1864C18.3668 11.0917 18 11.3781 18 11.7685V17.2315C18 17.6219 18.3668 17.9083 18.7455 17.8136L20.4851 17.3787C21.3754 17.1561 22 16.3562 22 15.4384Z"
            stroke="#000000"
            stroke-width="1"
          ></path>
          <path
            d="M20 18V18.5C20 19.6046 19.1046 20.5 18 20.5H14.5"
            stroke="#000000"
            stroke-width="1"
          ></path>
          <path
            d="M13.5 22H10.5C9.67157 22 9 21.3284 9 20.5C9 19.6716 9.67157 19 10.5 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22Z"
            stroke="#000000"
            stroke-width="1"
          ></path>
        </svg>
      </a>
      <div
        id="terms-service"
        role="tooltip"
        class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
      >
        Terms of Service
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div
        id="get-support"
        role="tooltip"
        class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
      >
        Get Support
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
    <div
      id="product-website"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
    >
      Product Website
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div
      id="dx-portal"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
    >
      DX Portal
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </aside>
</templatE>