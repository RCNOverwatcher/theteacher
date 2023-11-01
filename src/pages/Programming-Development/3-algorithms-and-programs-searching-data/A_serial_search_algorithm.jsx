import React from "react";

function A_serial_search_algorithm() {
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
                                A serial search algorithm
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Searching for data
                                  <br />
                                </strong>
                                We know that sorting data means puting some data
                                into some kind of order. We have seen examples
                                of insertion and bubble sort algorithms and
                                written some Python programs to see how they
                                work. Searching for data means looking for a
                                particular piece of data in a set of data. Just
                                as there are algorithms for sorting data, there
                                are also algorithms for searching for data.
                              </p>

                              <p>
                                <strong>Special cases</strong>
                                <br />
                                Whatever method is used for searching, you
                                should always be aware that there are special
                                cases common to all methods.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  1. You may be searching for a piece of data
                                  that isn't actually in the set of data you are
                                  searching through.
                                </strong>
                                <br />
                                <strong>
                                  2. You may be searching for a piece of data in
                                  an empty data structure, such as a list with
                                  no elements.
                                  <br />
                                  3. you may be searching for a piece of data
                                  that appears more than once.
                                </strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  A serial search
                                </strong>
                                <br />A serial search involves starting at the
                                beginning of a file and checking each record in
                                turn. You would need to check if the first
                                record is the one you are looking for. If it is,
                                then you can stop searching and report that you
                                have found the record. If it isn’t the one you
                                are looking for then you go on to the next
                                record. You repeat this process until either you
                                find the record you want or you come to the end
                                of the file. If you do come to the end of the
                                file without finding the record you want then
                                you simply report that the record you are
                                looking for isn’t in the file and stop
                                searching! It doesn't actually matter if the
                                records are in a particular order or not when
                                you search through them when you do a serial
                                search.
                              </p>
                              <p>
                                We are going to assume that a piece of data can
                                appear only once for the moment. A typical
                                algorithm for a serial search through a list
                                called
                                <strong>myList</strong> of size
                                <strong>n</strong>&nbsp;to find the first
                                instance of a piece of data is as follows:
                              </p>
                              <p>
                                <strong>
                                  Set a variable called index = 0 &nbsp; &nbsp;#
                                  this will be our counter, to work through a
                                  list
                                </strong>
                                <br />
                                <strong>
                                  Set a Boolean flag called found = False &nbsp;
                                  &nbsp;# this will indicate if we have found
                                  the item or not
                                </strong>
                                <br />
                                <strong>
                                  Set a variable called hunted to be the data we
                                  are searching for.
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  while (index &lt; n) and (found == false):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;if myList[index] == hunted
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; found = true
                                  <br />
                                </strong>
                                <strong>
                                  &nbsp; &nbsp; &nbsp;else
                                  <br />
                                </strong>
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;index =
                                  index + 1
                                </strong>
                              </p>
                              <p>
                                <strong>
                                  if found == true
                                  <br />
                                  &nbsp; &nbsp; &nbsp;print("Item found at
                                  position", index)
                                  <br />
                                  else
                                  <br />
                                  &nbsp; &nbsp; &nbsp;print("Item not found.")
                                </strong>
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

export default A_serial_search_algorithm;