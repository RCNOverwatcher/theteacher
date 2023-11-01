import React from "react";

function Recursion__iteration_and_divide_and_conquer() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Recursion, iteration and divide and conquer
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />
                                Imagine a problem where you had to add a list of
                                numbers, such as 1 + 3 + 5 + 7 + 9. How would
                                you go about this? In programming, we might
                                decide to use a loop, or we could use a
                                technique known as 'divide and conquer' and use
                                a recursive routine. We will investigate both
                                approaches.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Iteration
                                    <br />
                                  </span>
                                </strong>
                                <span class="NormalContentHeading">
                                  If we wanted to add a list of numbers
                                  together, we might write a function that uses
                                  a for loop. We would then call that function
                                  and pass it a list of numbers we wanted to add
                                  together. Let's see how to do this in Python.
                                </span>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    def myList(listOfNumbers):
                                    <br />
                                    &nbsp; &nbsp; total = 0<br />
                                    &nbsp; &nbsp; for i in listOfNumbers:
                                    <br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; total = total +
                                    i<br />
                                    &nbsp; &nbsp;return total
                                  </span>
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    print(mylist([1, 3, 5, 7, 9]))
                                  </span>
                                </strong>
                              </p>
                              <p>
                                There is nothing particularly 'wrong' with this
                                solution because apart from anything else, it
                                works. However, there is another way. In
                                programming, there is a technique known as
                                'divide and conquer'. This means that we try and
                                break down the problem into smaller problems,
                                solve each of the smaller problems using
                                recursion and then recombine the solutions to
                                the smaller problems to get the answer to the
                                original problem.&nbsp;
                              </p>
                              <p>
                                <strong>Divide and conquer in practice</strong>
                                <br />
                                How could you divide up this problem? Let's
                                break it down.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>total = 1 + 3 + 5 + 7 + 9 </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  This is a list. Add the first item in the list
                                  to a new list made up of all of the elements
                                  in the list except the first one, like this:
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    total =&nbsp;
                                  </span>
                                  1 + (3 + 5 + 7 + 9)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  But (3 + 5 + 7 + 9) is a list. So as before,
                                  add the first item of this list&nbsp;to a new
                                  list made up of all of the elements in the
                                  list except the first one:
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>3 + (5 + 7 + 9)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  But (5 + 7 + 9) is a list. So as before, add
                                  the first item of this list&nbsp;to a new list
                                  made up of all of the elements in the list
                                  except the first one:
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5 + (7 + 9)
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-top: 10px; margin-left: 30px">
                                <strong>
                                  But (7 + 9) is a list. So as before, add the
                                  first item of this list&nbsp;to a new list
                                  made up of all of the elements in the list
                                  except the first one:
                                </strong>
                              </p>
                              <p style="margin-bottom: 10px; margin-left: 30px">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    7 + (9)
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-top: 10px; margin-left: 30px">
                                <strong>
                                  But (9) is a list with only one element in it.
                                  This is the stopping condition for recursion.
                                </strong>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  9 is a list but it only has one element. A
                                  list with only one element is a special case.
                                  Every recursion problem has a special case and
                                  we always need to identify what it is as it is
                                  the condition that will be used to stop the
                                  recursion process. We will see this working in
                                  a moment when we write the algorithm.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  What we have done is to break this problem
                                  down so that all we ever do (apart from in the
                                  special case) is to add two numbers together!
                                  In other words:
                                </span>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  9 is a list with just one element in, our
                                  special case. We can't divide and conquer the
                                  problem any more.
                                  <br />
                                  We do 7 + 9 = 16. We pass 16 back.
                                </strong>
                                <br />
                                <strong>
                                  Now we do 5 + 16 = 21. We pass 21 back.
                                </strong>
                                <br />
                                <strong>
                                  Now we do 3 + 21 = 24. We pass 24 back.
                                </strong>
                                <br />
                                <strong>
                                  Now we do 1 + 24 = 25. This is our answer.
                                </strong>
                              </p>
                              <p
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <span style="line-height: 1.5">
                                  We have broken the problem down into smaller
                                  parts. We can now solve the problem using
                                  recursion. Here is a recursive routine that
                                  will do the job:
                                </span>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def myList(listOfNumbers):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; if len(listOfNumbers) == 1:
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; return
                                  listOfNumbers[0]
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; else:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; return
                                  listOfNumbers[0] + myList(listOfNumbers[1:])
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>print(myList([1, 3, 5, 7, 9]))</strong>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  Remember that the first element in any list is
                                  always counted from zero not one, which is why
                                  we use listOfNumbers[0]. Also note that [1:]
                                  takes a list and gets all of the elements from
                                  position 1 (i.e. the second element) to the
                                  end of the list, a process called 'splicing' a
                                  list.&nbsp;
                                </span>
                              </p>
                              <p>
                                Notice the
                                <strong>
                                  <em>if statement</em>
                                </strong>{" "}
                                checks to see if there is just one element in
                                the list. If there is, it returns it and
                                finishes as that is the answer. As we have
                                already said, it is important to have a line
                                like this in a recursive function because this
                                is the line that will allow you to exit the
                                recursive function. If you didn't have this
                                line, you would constantly call the function you
                                are in and eventually, you would run out of
                                memory and the program would stop with a 'stack
                                overfow' error.
                              </p>
                              <p>
                                <strong>
                                  Why is this function 'recursive'?
                                </strong>
                                <br />
                                This is recursive function because it calls
                                itself. If you look on the fifth line,
                                <em>
                                  <strong>
                                    return listOfNumbers[0] +
                                    myList(listOfNumbers[1:])
                                  </strong>
                                </em>
                                &nbsp;this says, get the first element in the
                                list and add it to all of the other elements in
                                the list, apart from the first one. The last
                                part of this line is another call to the
                                function you are currently in. This is another
                                call to add a list! Sometimes, it is a lot
                                easier to see what is happening in a recursive
                                function by drawing a diagram:
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/07ee848e-815a-4f94-88d8-d30002f4e6c0recurse.GIF"
                                  alt="recurse"
                                />
                              </p>
                              <p>
                                Recursion takes most people some time to get
                                their brains around so don't worry if you don't
                                understand it first time. Keep working at it and
                                practising different problems and eventually, it
                                will click!
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

export default Recursion__iteration_and_divide_and_conquer;