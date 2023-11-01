import React from "react";

function An_insertion_sort_program_in_Python() {
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
                                An insertion sort program in Python
                              </h1>
                              <p>
                                We saw in the previous work how an insertion
                                sort actually works. The insertion sort
                                algorithm we had didn't really 'roll off the
                                tongue' so we are going to tidy it up and write
                                it in pseudo-code:
                              </p>

                              <p style="margin-left: 30px">
                                <strong>Get an array called myArray</strong>
                                <br />
                                <strong>
                                  for j = all of the elements in myArray,
                                  starting with the second element
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; key = myArray[j] &nbsp; &nbsp;#
                                  key is the data at position j.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; i = j - 1 &nbsp; &nbsp;# i is
                                  the first position of the element just before
                                  j
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; while &lt;not first position in
                                  array&gt; and &lt;myArray[i] &gt; key&gt;
                                  &nbsp; &nbsp;#Swap elements if you need to!
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;myArray[i+1]
                                  = myArray[i] &nbsp; &nbsp;# swap the big value
                                  with the small value.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;i = i-1
                                  &nbsp;# now get ready to check the element
                                  down the list.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; myArray[i+1] = #
                                  make sure you keep track of the key you are
                                  using!
                                </strong>
                              </p>
                              <p>
                                What we are doing is exactly what we described
                                in the previous lesson. We are starting with the
                                data at the second element position (at position
                                1, not 2, remember) and comparing it to the data
                                at the first element position. If the data in
                                the first position is bigger than the data in
                                the second position, we have to swap them. Then
                                we look at the data in the third position. We do
                                exactly the same as above, comparing position 3
                                with 2, and then if necessary, position 2 with
                                1.
                              </p>
                              <p>
                                <strong>Q1.</strong> Writing code from an
                                algorithm takes some practice. Type this in
                                using Python and get it working. Test it
                                thoroughly and check it carefully. Just because
                                code runs and gives you some results doesn't
                                mean the results are correct!
                              </p>
                              <p>
                                <img
                                  src="images/2dda4e25-c59b-43a1-8df2-31de2a6864c2python2.JPG"
                                  alt="python2"
                                />
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

export default An_insertion_sort_program_in_Python;
