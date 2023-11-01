import React from "react";

function Linear_execution_performance() {
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
                                Linear execution performance&nbsp;O(N)
                              </h1>
                              <p>
                                <strong>
                                  Linear execution time O(N)
                                  <br />
                                </strong>
                                O(N) describes any algorithm with a linear
                                growth in performance that is directly
                                proportional to the size of the data set that
                                the algorithm has to work with. The more data
                                you give the algorithm, the longer it
                                takes.&nbsp;
                              </p>

                              <p>
                                <strong>O(N) in programming</strong>
                                <br />A good example in programming of an
                                algorithm that is of order n is a search
                                algorithm. If you had to count the items in an
                                array that matched a particular number, you
                                would have to visit each element in the array
                                and test it. If the array had 10 numbers in, you
                                would have to make 10 comparisons, one for each
                                element. If the array had 300 elements, you
                                would have to make 300 comparisons and if there
                                were 20000, you would need to visit the array
                                20000 times to get your answer. We can represent
                                this using a graph:
                              </p>
                              <p>
                                <img
                                  style="vertical-align: middle"
                                  src="images/f6048235-92d7-4afb-8f47-e591384a1608bogo2.GIF"
                                  alt="bogo2"
                                />
                              </p>
                              <p>
                                <strong>An example in Python</strong>
                                <br />
                                The performance is directly proportionally
                                related to the size of the data you are using.
                                For example, if you have to add 5 numbers
                                together, you could write a recursive algorithm
                                that adds the first two numbers together, and
                                then adds the next one to the answer, then adds
                                the next one to the answer, and so on until the
                                final answer is reached. Here is the Python code
                                to do this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def myList(listOfNumbers):</strong>
                                <br />
                                <strong> if len(listOfNumbers) == 1:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; return listOfNumbers[0]
                                </strong>
                                <br />
                                <strong> else:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; return listOfNumbers[0] +
                                  myList(listOfNumbers[1:])
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>print(myList([1, 3, 5, 7, 9]))</strong>
                              </p>
                              <p>
                                The more numbers you have to add, the more
                                recursive calls you have to make. If you had to
                                add 10 numbers, you would need to make 10 calls
                                to the function recursively. If you had to add
                                20 numbers, you would
                                <span style="line-height: 16.3636360168457px">
                                  need to make 20 calls to the function
                                  recursively.
                                </span>
                                &nbsp;This relationship is therefore linear and
                                we represent this in Big O notation using O(n).
                              </p>
                              <p>
                                <strong>
                                  Another example in Python - a linear search
                                </strong>
                              </p>
                              <p>
                                <img
                                  src="images/656e5a02-753f-49e0-9161-7720f8868bb6list3.GIF"
                                  alt="list3"
                                />
                                <br />
                                This code creates an array of 20 numbers between
                                1 and 5. It then searches for how many matches
                                are made for the number 4. By altering the size
                                of the array, you can see that the number of
                                comparisons is directly related to the size of
                                the array.
                              </p>
                              <p>
                                Other examples of O(N) include traversing a tree
                                and finding an element using a linear search.
                              </p>
                              <p class="QuestionStyle"></p>
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

export default Linear_execution_performance;