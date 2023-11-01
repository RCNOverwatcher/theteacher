import React from "react";

function Logarithmic_execution_performance() {
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
                                Logarithmic execution performance&nbsp;O(log N)
                              </h1>
                              <p>
                                <strong style="line-height: 16.3636360168457px">
                                  Logarithmic execution time O(log N)
                                  <br />
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  This kind of algorithm produces a logarithmic
                                  performance. The growth curve is at its most
                                  at the start but flattens out in a logarithmic
                                  way. For example, using 1 data set might take
                                  a second. 10 data sets might take 2 seconds.
                                  100 data sets might take 3 seconds and so on.
                                  The numbers of data items used seems to have a
                                  very small effect on the performance. We can
                                  represent this as a graph:
                                </span>
                              </p>

                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <img
                                    style="vertical-align: middle"
                                    src="images/65a5968e-7d9a-49cf-9c4a-8664b5f4ff25bogo5.GIF"
                                    alt="bogo5"
                                  />
                                  <br />
                                  <strong>O(log N) in programming</strong>
                                  <br />A classic search algorithm that displays
                                  this kind of Big O characteristic is the
                                  binary search. For large sets of data, it is
                                  so much quicker than a linear search, for
                                  example. Each time you go through the data in
                                  a binary search, the data that you need to
                                  search through next time decreases by half.
                                  This is why you can find what you want very
                                  quickly, even with large data sets. Of course,
                                  binary searches require the data to be in
                                  order so a sort algorithm has to be applied to
                                  unsorted data first and this has an impact on
                                  the overall efficiency of the search process.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <a
                                    href="/index.php/algorithms-and-problem-solving-2/2-3-algorithms/2-3-1-algorithms/searching-algorithms/3390-an-introduction-to-binary-searching"
                                    target="_blank"
                                  >
                                    You can see how a binary search works here.
                                  </a>
                                  <br />
                                  <a
                                    href="/index.php/algorithms-and-problem-solving-2/2-3-algorithms/2-3-1-algorithms/searching-algorithms/3391-a-binary-search-algorithm"
                                    target="_blank"
                                  >
                                    You can see a more detailed binary search
                                    here.
                                  </a>
                                  <br />
                                  <a
                                    href="/index.php/algorithms-and-problem-solving-2/2-3-algorithms/2-3-1-algorithms/searching-algorithms/3392-a-binary-search-program-in-python"
                                    target="_blank"
                                  >
                                    You can see a binary search implemented in
                                    Python here.
                                  </a>
                                </span>
                              </p>
                              <p class="QuestionStyle">
                                Another example that display O(log N) include
                                the insert and find operations in a binary
                                search tree.
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

export default Logarithmic_execution_performance;