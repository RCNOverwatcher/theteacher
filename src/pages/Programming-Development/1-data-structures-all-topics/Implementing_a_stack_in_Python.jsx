import React from "react";

function Implementing_a_stack_in_Python() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Implementing a stack in Python
                              </h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Introduction
                                  <br />
                                </strong>
                                A stack can be implemented in Python easily
                                using lists and list methods. There are broadly
                                two approaches that can be used. We can simply
                                create the functions we need, or if we are using
                                an Objected Oriented approach, we can create a
                                class and use that. In both cases, we could put
                                the code into our own library. That way, when we
                                need a stack in the future, we don't have to
                                rewrite the code and test it. We just import the
                                library and use the stack.
                              </p>

                              <p>
                                <strong>
                                  Creating a stack using functions
                                </strong>
                                <br />
                                Here is some code to create a stack and the
                                functions needed to display the contents,
                                pushing and popping items and testing it to see
                                if it is empty.
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/70fc4276-e995-40e4-8e55-6f94902d2651functions.GIF"
                                  alt="functions"
                                  width="250"
                                  height="665"
                                />
                              </p>
                              <p>
                                When you run the code, you can see that because
                                we are using a list, we can hold a mixture of
                                data types and structures.
                              </p>
                              <p>
                                <strong>Creating a library of functions</strong>
                                <br />
                                Stacks are useful data structures. We can store
                                these functions in our own library, and use them
                                in the future rather than rewriting them
                                whenever we need one. We need to remove
                                everything except the functions from our code
                                above. We also need to ensure that we can pass
                                the stack name and size we are using from our
                                main program to the library functions. The
                                library functions must be generic; they must
                                work with any stack name and any stack size.
                                Store the following as a file called
                                <em>
                                  <strong>my_library.py</strong>
                                </em>{" "}
                                .
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/7296282d-e408-4961-9d95-b7f0b081ba78functions_lib.GIF"
                                  alt="functions lib"
                                  width="240"
                                  height="391"
                                />
                                &nbsp;
                              </p>
                              <p>
                                <strong>Using the library</strong>
                                <br />
                                To use an existing library of functions, you
                                need to import the library into your new
                                program. The simplest way to do this is to make
                                sure that the library is in
                                <strong>
                                  <em>the same folder</em>
                                </strong>{" "}
                                as your new program. Here is an example of using
                                the library we just created:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/e10ebf30-e13c-48a8-aa44-a02cd48a782cfunctions_lib_use.GIF"
                                  alt="functions lib use"
                                  width="330"
                                  height="242"
                                />
                              </p>
                              <p>
                                As you can see, we imported the library in our
                                main program and then created a new stack and
                                specified its size. These parameters were then
                                passed to the functions in the library using the
                                dot notation, the library name followed by a dot
                                and then name of the function, along with any
                                parameters needed.
                              </p>
                              <p>
                                <strong>
                                  Using an Object Oriented approach
                                </strong>
                                <br />
                                If you are using an OO approach in Python, we
                                can create a class called Stack in a library. We
                                can then import and use that when we need to in
                                another program. Again, make sure the library
                                (which we will call{" "}
                                <em>
                                  <strong>stack1.py</strong>
                                </em>
                                ) and main program are in the same folder. Here
                                is the code for the class, which is stored in
                                the library:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/a90fbe93-f06c-4909-a315-4189a7ac53ffoo_1.GIF"
                                  alt="oo 1"
                                  width="260"
                                  height="184"
                                />
                              </p>
                              <p>
                                Here is an example program that uses the class
                                in the library.
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/efd091b6-0464-499e-a8f8-47fb83e27937oo_2.GIF"
                                  alt="oo 2"
                                  width="270"
                                  height="191"
                                />
                              </p>
                              <p>
                                <strong>Tasks</strong>
                                <br />
                                <strong>Q1.</strong>
                                Make sure you get the code running for creating
                                a stack, and using a stack in a library.
                                <br />
                                <strong>Q2.</strong>
                                Test the stack and its different functions, by
                                pushing and popping data, predicting the results
                                and then displaying the contents of the stack.
                                <br />
                                <strong>Q3.</strong>
                                Investigate how you would import a library if it
                                wasn't in the same folder as the program that
                                used the library.
                                <br />
                                <strong>Q4.</strong> It can be a little bit
                                tedious and time-consuming having to use the dot
                                notation and typing in long library names and
                                long function names. Investigate how you could
                                reduce this problem.
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Implementing_a_stack_in_Python;