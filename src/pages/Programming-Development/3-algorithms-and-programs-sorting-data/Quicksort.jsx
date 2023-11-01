import React from "react";

function Quicksort() {
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
                              <h1 style="text-align: center">Quicksorting</h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Quicksorting
                                  <br />
                                </strong>
                                <span style="line-height: 1.5">
                                  A very quick way to sort a set of data is to
                                  use the quicksort algorithm. The algorithm
                                  performs the following functions on a set of
                                  data:
                                </span>
                              </p>

                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      It selects one of the pieces of data in
                                      the set of data to be sorted, called the
                                      ‘PIVOT’.
                                    </li>
                                    <li class="NormalContent">
                                      It makes a pass through all the data
                                      items. At the end of the pass, three
                                      things will have happened:
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <ul>
                                <ul>
                                  <li style="list-style-type: none">
                                    <ul>
                                      <li style="list-style-type: none">
                                        <ul style="list-style-type: circle">
                                          <li class="NormalContent">
                                            The PIVOT will be positioned
                                            correctly.
                                          </li>
                                          <li class="NormalContent">
                                            Data items less than the PIVOT will
                                            be on the left of it.
                                          </li>
                                          <li class="NormalContent">
                                            Data items greater than the PIVOT
                                            will be on the right of it.
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The quicksort algorithm is then applied
                                      recursively to the left of the PIVOT.
                                    </li>
                                    <li>
                                      The quicksort algorithm is then applied
                                      recursively to the right of the PIVOT.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  An example of the quicksort algorithm
                                </strong>
                                <br />
                                One slightly confusing aspect of quicksort is
                                that sometimes we need to look at the actual
                                data and sometimes we need to look at pointers
                                that point to the position of a data item.
                              </p>
                              <p align="center">
                                <strong>
                                  <em>
                                    It is very important to know whether you are
                                    looking at the
                                    <span style="text-decoration: underline">
                                      position
                                    </span>
                                    of a piece of data (given by the pointer) or
                                    the
                                    <span style="text-decoration: underline">
                                      actual data
                                    </span>
                                    at the position pointed to by the pointer!!
                                  </em>
                                </strong>
                              </p>
                              <p>
                                The best way to understand how quicksort works
                                is to do an example. Imagine you want to sort
                                these nine numbers:
                              </p>
                              <p align="center">
                                <img
                                  src="images/e9bb4d03-31c8-445b-9c56-03da598f4e431.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  What variables and pointers do we need?
                                </strong>
                                <br />
                                We are going to need two variables and two
                                pointers.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      We will need a variable to hold the first
                                      value, called FIRST.
                                    </li>
                                    <li class="NormalContent">
                                      We will need a pointer that points to the
                                      position of data as we move through the
                                      data from left to right. We will call this
                                      pointer UP.
                                    </li>
                                    <li class="NormalContent">
                                      We will need a pointer that points to the
                                      position of data as we move from right to
                                      left through the data. We will call this
                                      pointer DOWN.
                                    </li>
                                    <li class="NormalContent">
                                      We will need a variable to hold something
                                      called the PIVOT.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>We now have:</p>
                              <p class="NormalContent" align="center">
                                &nbsp;
                                <img
                                  src="images/c2813005-1e6f-4928-821d-1bacfebfde6124.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  What actually happens when you call the
                                  quicksort procedure?{" "}
                                </strong>
                                <br />A slightly more detailed pseudo-code
                                description of what quicksort does is as
                                follows:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  1. If the number of data items to be sorted is
                                  greater than one then
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp; 2. Make the PIVOT
                                  equal to the first piece of data in the set of
                                  data we want to sort.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  3. Make FIRST equal the first piece of data in
                                  the set of data we want to sort.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  4. Make UP the position of the first piece of
                                  data.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  5. Make DOWN equal the position of the last
                                  piece of data.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  6. REPEAT
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  7. Increment UP until you find the data
                                  pointed to by UP that is greater than the
                                  PIVOT value{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  (or until you get to the last&nbsp; position).
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  8. Decrement DOWN until you find the data
                                  pointed to by DOWN that is less than or equal
                                  to the PIVOT.{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  (Always start by checking the actual value
                                  pointed to by DOWN first!)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  9. If the pointer UP is less than pointer DOWN
                                  then{" "}
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  10. Swap the data pointed to by those
                                  pointers.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  11. End If
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12. Until
                                  (UP meets DOWN) or (UP passes across DOWN).
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13. Swap
                                  FIRST with the data item pointed to by DOWN.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14. Set
                                  PIVOT equal to the value pointed to by DOWN.
                                </strong>
                                <br />
                                <strong> 15. End If.</strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Let’s work through the example!
                                </strong>
                                <br />
                                After lines 1 to 5 in out pseudo-code, we have:
                              </p>
                              <div align="center">
                                <img
                                  src="images/090f7370-d6c3-4632-9de6-17acd83580a03.gif"
                                  alt
                                />
                              </div>
                              <p align="left">
                                We now need to do the pseudo-code in lines 6 to
                                14. Increment UP until UP is greater than PIVOT.
                                The first piece of data that is greater than 42
                                is 70. Decrement DOWN until the data pointed to
                                by DOWN is less than or equal to PIVOT. In fact,
                                30 is the first piece of data that is less than
                                or equal to 42. We now have the following:
                              </p>
                              <p align="center">
                                <img
                                  src="images/68190a12-b0db-4a52-8410-c9ff59fd5dc54.gif"
                                  alt
                                />
                              </p>
                              <p align="left">
                                UP is less than DOWN (2 &lt; 9) so we swap the
                                data in position 2 with the data in position 9,
                                to give:
                              </p>
                              <p align="center">
                                <img
                                  src="images/e708dde2-e11e-4f61-9aba-391028f2ff2e5.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Continue!
                                </strong>
                                <br />
                                The pointers UP and DOWN haven’t met and neither
                                have they crossed over.&nbsp; We are therefore
                                still inside the REPEAT construct. We need to
                                continue as before. We continue to increment UP
                                until we find the next piece of data where UP is
                                greater than PIVOT. UP is at position 5 (data
                                51) when this occurs. We decrement DOWN until we
                                find the first piece of data where DOWN is less
                                than or equal to PIVOT. DOWN is at position 6
                                when this occurs (data 10). We then exchange
                                their values because UP is less than DOWN. We
                                now have this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/58a9a367-2794-4505-8c5f-60e075108cd76.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  And continue again!
                                </strong>
                                <br />
                                The pointers UP and DOWN haven’t met and neither
                                have they crossed over.&nbsp; We are therefore
                                still inside the REPEAT construct. We need to
                                continue as before. We increment UP until we
                                find the first piece of data where UP is greater
                                than PIVOT. UP is at position 6 (data 51) when
                                this occurs. We decrement DOWN until we find the
                                first piece of data where DOWN is less than or
                                equal to PIVOT. DOWN is at position 5 when this
                                occurs (data 10). We do
                                <span style="text-decoration: underline">
                                  not
                                </span>
                                exchange the data values at positions UP and
                                DOWN this time because UP is not less than DOWN.
                                We now have this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/ddcdb028-cbe3-454d-af94-aac5ed54567d7.gif"
                                  alt
                                />
                              </p>
                              <p>
                                UP has actually passed across DOWN. This is one
                                of the exit conditions of the REPEAT construct
                                in line 12 of our pseudo-code. We therefore drop
                                out of the REPEAT loop. Line 13 of the
                                pseudo-code says to swap FIRST with the data
                                item pointed to by DOWN. Line 14 of the
                                pseudo-code says that PIVOT should then be given
                                the value pointed to by DOWN. This gives us:
                              </p>
                              <p align="center">
                                <img
                                  src="images/7d7f37ef-72b3-4970-9ae4-c226554077238.gif"
                                  alt
                                />
                              </p>
                              <p>
                                PIVOT = 42 (which, in this case, just so happens
                                to be what it was before!)
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Something important to note!
                                </strong>
                                <br />
                                All the data values to the left of the PIVOT
                                value are less than the PIVOT value. All of the
                                values to the right of the PIVOT value are
                                greater than the PIVOT value. This means:
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The PIVOT value is now in exactly the
                                      correct place if, for a moment, we assumed
                                      that all data items were now ordered
                                      correctly.
                                    </li>
                                    <li class="NormalContent">
                                      There is an unordered set of data items to
                                      the left of the PIVOT. These data items
                                      are all less than the PIVOT value.
                                    </li>
                                    <li class="NormalContent">
                                      There is an unordered set of data items to
                                      the right of the PIVOT. These data items
                                      are all more than the PIVOT value.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                We can represent this as:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/b1e35108-5055-4f00-97a9-953c55f8a91e9.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Now work on the left hand side.
                                </strong>
                                <br />
                                What we can now do is treat the left hand set of
                                data items as a completely independent set of
                                data that needs sorting using the quicksort
                                algorithm again! We call the quicksort algorithm
                                again (recursion) and continue.
                              </p>
                              <p align="center">
                                <img
                                  src="images/e398ff2f-4c2e-47bd-9787-a83da2d2a5c79a.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                Increment UP until it is greater than PIVOT. UP
                                equals 2 (data 30). Decrement DOWN until it is
                                less than or equal to PIVOT, as before. DOWN
                                therefore equals 1 (data 10).
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/62623c28-864b-4ce9-bba7-40c7f614780b10.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Continue!
                                </strong>
                                <br />
                                We don’t exchange the data items pointed to by
                                UP and DOWN because the pointer UP is not less
                                than the pointer DOWN. We have met one of the
                                exit conditions for the REPEAT loop and so we
                                exit the loop. We exchange FIRST and DOWN (so in
                                this particular case they stay the same because
                                FIRST and DOWN have the same value). PIVOT is
                                then given the value of the data pointed to by
                                DOWN, which is 10 (the same as it was before).
                                PIVOT is now in the correct place if
                                <em>all</em> of the data were in order.
                              </p>
                              <p class="NormalContent">
                                There aren’t any data items to the left of the
                                PIVOT so there isn’t a left hand side of the
                                PIVOT to work on. However, there is more than
                                one piece of data to the right of the PIVOT. We
                                therefore quicksort the right hand side. We call
                                the quicksort algorithm again (recursion) and
                                continue. We now have:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/8a67a1f8-b4b1-4140-8fc5-bbdc10d800a412.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                Incrementing UP until the data item pointed to
                                by UP is greater than PIVOT, we get UP equals 3
                                (data 40). Decrementing DOWN until the data item
                                pointed to by DOWN is less than or equal to
                                PIVOT, we get DOWN equals 2 (data 20). We don’t
                                exchange the data items pointed to by UP and
                                DOWN because the pointer UP is not less than the
                                pointer DOWN. Because UP and DOWN have crossed,
                                however, we must swap FIRST with the data item
                                pointed to by DOWN and then PIVOT is given the
                                data item pointed to by DOWN. PIVOT is now in
                                the correct place if <em>all</em> the data were
                                in the correct order. We now have:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/494e9f86-6ac2-4ea5-ba33-40bdcea6df9413.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong>Remember!</strong>
                                <br />
                                Just to remind you, after every quicksort pass
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The PIVOT value is in the right place.
                                    </li>
                                    <li class="NormalContent">
                                      All data to the left of the PIVOT are less
                                      than the PIVOT.
                                    </li>
                                    <li class="NormalContent">
                                      All data to the right of the PIVOT are
                                      greater than the PIVOT.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                The left hand side of the PIVOT has only one
                                data item and so doesn’t need quicksorting. This
                                also applies to the right hand side of the
                                PIVOT. These three data items must therefore be
                                sorted in order!
                              </p>
                              <p class="NormalContent">So, we started with:</p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/24778d98-09bc-41b4-aa64-544c46d9333c14.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                and quicksorted them into:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/f540a219-e97c-41cc-b768-fcd8e409066a15.gif"
                                  alt
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  A summary so far.
                                </strong>
                                <br />
                                To summarise what we have done so far, we
                                started with this:
                              </p>
                              <p align="center">
                                <img
                                  src="images/f39b3cf2-a5c8-4a33-9fb9-caf810b7ebd316.gif"
                                  alt
                                />
                              </p>
                              <p>And quicksorted it into this:</p>
                              <p align="center">
                                <img
                                  src="images/2d9ac921-c351-4917-a4a5-f9e9ccda16dc17.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We then recursively called quicksort to sort the
                                left hand side of the PIVOT, to get this:
                              </p>
                              <p align="center">
                                <img
                                  src="images/d660630a-b5e5-4150-9b9f-39732c5c2a9618.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We now need to quicksort the right hand side.
                                <strong>
                                  <span style="text-decoration: underline">
                                    &nbsp;
                                  </span>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Quicksorting the right hand side.
                                </strong>
                                <br />
                                Remember to follow the algorithm! It is a very
                                mechanical process.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/ab3704a2-a937-4bfc-b62b-2995c3c3c4b419.gif"
                                  alt
                                />
                              </p>
                              <p>
                                UP is incremented until the data it is pointing
                                to is greater than the PIVOT. UP is incremented
                                until it equals 2. Down is decremented until it
                                points to a piece of data that is less than or
                                equal to the PIVOT. Down is decremented until it
                                equals 1.
                              </p>
                              <p class="NormalContent">
                                The pointer UP is not less than the pointer DOWN
                                so they are not swapped. UP and DOWN have
                                crossed over so you exit the REPEAT loop. FIRST
                                is swapped with the data item pointed to by DOWN
                                (they both are 51 in this particular case).
                                PIVOT is set to DOWN, which is 51 (which just
                                happens to be what it was before).
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Continue!
                                </strong>
                                <br />
                                We now have a PIVOT value of 51. There aren’t
                                any data items to the left of the PIVOT so there
                                isn’t a left hand side of the PIVOT to work on.
                                However, there is more than one piece of data to
                                the right of the PIVOT. We therefore quicksort
                                the right hand side.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/28da52e1-1ea4-48ed-8050-e612d9a9d11820.gif"
                                  alt
                                />
                              </p>
                              <p>
                                UP is incremented until the data it is pointing
                                to is greater than the PIVOT. UP is incremented
                                until it equals 2. Down is decremented until it
                                points to a piece of data that is less than or
                                equal to the PIVOT. Down is decremented until it
                                equals 1.
                              </p>
                              <p class="NormalContent">
                                The pointer UP is not less than the pointer DOWN
                                so they are not swapped. UP and DOWN have
                                crossed over. FIRST is swapped with the data
                                item pointed to by DOWN (they both are 61 in
                                this particular case). PIVOT is set to DOWN,
                                which is 61 (which just happens to be what it
                                was before).
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  And again!
                                </strong>
                                <br />
                                We now have a PIVOT value of 61. There isn’t a
                                left hand side so we quicksort the right hand
                                side by calling the quicksort algorithm
                                recursively again.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/aa276a4f-6954-4b7b-ba71-0585aa36476221.gif"
                                  alt
                                />
                              </p>
                              <p>
                                UP is incremented until the data it is pointing
                                to is greater than the PIVOT (or you get to the
                                last position). UP is incremented until it
                                equals 2 (the last position). DOWN is
                                decremented until it points to a piece of data
                                that is less than or equal to the PIVOT. In
                                fact, DOWN stays at the value 2 because 70 is
                                less than or equal to the PIVOT. Both UP and
                                DOWN now equal 2.
                              </p>
                              <p class="NormalContent">
                                The pointer UP is not less than the pointer DOWN
                                (they are both the same). The pointer UP has met
                                the pointer DOWN. This is an exit condition for
                                the REPEAT loop. FIRST is now swapped with the
                                data item pointed to by DOWN so is given the
                                value 70. PIVOT is then set to the data item
                                pointed to by DOWN, which is 70.
                              </p>
                              <p class="NormalContent">
                                We now have the data in this order:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/f49c919a-5a22-44a2-b732-80e5f090aea822.gif"
                                  alt
                                />
                              </p>
                              <p>
                                We have a PIVOT value 70. There isn’t a left
                                hand side of the PIVOT and the right hand side
                                only has one piece of data, so we have finished
                                quicksorting this data.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Now recombine all of the recursive calls.
                                </strong>
                                <br />
                                We started with this:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/b6a85b2f-4b6e-4f48-9967-2431f1248be323.gif"
                                  alt
                                />
                              </p>
                              <p>And we have ended with this:</p>
                              <p align="center">
                                <img
                                  src="images/32f25935-a944-44d2-a3f8-150cbd18fbbe24.gif"
                                  alt
                                />
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

export default Quicksort;
