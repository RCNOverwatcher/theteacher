import React from "react";

function An_introduction_to_binary_searching___the_simple_explanation_() {
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
                                An introduction to binary searching - the simple
                                explanation!
                              </h1>
                              <p>
                                Binary searching is a very efficient way of
                                searching through lots of data items to find the
                                found you want. In serial searching, the data
                                doesn't have to be organised in any particular
                                way. We just start at the beginning and start
                                looking through the data one-by-one. If you are
                                going to use binary searching, the data must be
                                sorted into an order first or it just won't
                                work. We can use one of the sorting algorithms
                                we have studied to do this or another one, but
                                the data must be sorted first.
                              </p>

                              <p style="margin-left: 30px">
                                <strong>
                                  We can represent a lot of data, which has been
                                  sorted into an order, by a red line.
                                </strong>
                                <br />
                                <strong>
                                  We find the middle point of the data (easily
                                  found - it's given by (lowest data item
                                  position + highest data item position) / 2
                                </strong>
                                <br />
                                <strong>
                                  We then ask ourselves 'is the data pointed to
                                  my middle the one I am searching for?'
                                </strong>
                                <br />
                                <strong>
                                  If it is, we stop and report that we've found
                                  the data.
                                </strong>
                                <br />
                                <strong>
                                  If it isn't, we ask 'is the data item we won't
                                  lower than the middle or higher than the
                                  middle?
                                </strong>
                                <br />
                                <strong>
                                  If it's lower than the middle, we can discard
                                  the data higher than the middle.
                                </strong>
                                <br />
                                <strong>
                                  If it's higher than the middle, we can discard
                                  the data lower than the middle.
                                </strong>
                                <br />
                                <strong>
                                  What we have in fact done is to throw away
                                  half of the data!
                                </strong>
                                <br />
                                <strong>
                                  Now, using our formula to find the new middle
                                  point of our new set of data, we repeat the
                                  above steps, but this time, we only have half
                                  the data to check!
                                </strong>
                                <br />
                                <strong>
                                  We ask ourselves again&nbsp;
                                  <strong>
                                    'is the data pointed to my middle the one I
                                    am searching for?'
                                  </strong>
                                </strong>
                                <br />
                                <strong>
                                  If it is, we stop and report that we've found
                                  the data.
                                </strong>
                                <br />
                                <strong>
                                  If it isn't, we ask 'is the data item we won't
                                  lower than the middle or higher than the
                                  middle?
                                </strong>
                                <br />
                                <strong>
                                  If it's lower than the middle, we can discard
                                  the data higher than the middle.
                                </strong>
                                <br />
                                <strong>
                                  If it's higher than the middle, we can discard
                                  the data lower than the middle.
                                </strong>
                                <br />
                                <strong>
                                  And then we throw away another half of the
                                  data again!
                                </strong>
                                <br />
                                <strong>
                                  We keep doing the above until either we find
                                  the data or we get down to the last data item
                                  and can't find it, so we stop and report that
                                  it's not there.
                                  <br />
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  We can represent the above in a diagram.
                                </strong>
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/0adfd0a0-19ac-49c9-acb8-5e264a816273binary1.JPG"
                                  alt="binary1"
                                />
                              </p>
                              <p>
                                A first attempt at a binary search algorithm
                                might go something like this:
                              </p>
                              <p>
                                <strong>found = false</strong>
                                <br />
                                <strong>
                                  While (there is data to search) and (you
                                  haven't found the data:)
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;find the midpoint
                                  of the data.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;if midpoint = the
                                  data you are looking for
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  found = true
                                  <br />
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  report 'data found'
                                </strong>
                                &nbsp;
                                <br />
                                <strong>&nbsp; &nbsp; &nbsp; &nbsp;else</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  discard the half of the data you don't need
                                </strong>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  So binary searching does one comparison, then,
                                  assuming you didn't get lucky and find the
                                  data you want, gets rid of half the data, and
                                  just keeps doing this, chopping the amount of
                                  data in half each time you do a compare. If
                                  you had a huge data file with 100,000 data
                                  items in it, you would only need to do a
                                  maximum of just 18 comparisons before you
                                  found the data or had to report it wasn't
                                  there!
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  100 000
                                  <br />
                                  50 000
                                  <br />
                                  25 000
                                  <br />
                                  12 500
                                  <br />6 250
                                  <br />3 125
                                  <br />1 562
                                  <br />
                                  781
                                  <br />
                                  390
                                  <br />
                                  195
                                  <br />
                                  98
                                  <br />
                                  49
                                  <br />
                                  24
                                  <br />
                                  12
                                  <br />6<br />3<br />2<br />1<br />
                                </span>
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

export default An_introduction_to_binary_searching___the_simple_explanation_;
