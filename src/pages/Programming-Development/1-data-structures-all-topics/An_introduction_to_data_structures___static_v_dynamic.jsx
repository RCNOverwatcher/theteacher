import React from "react";

function An_introduction_to_data_structures___static_v_dynamic() {
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
                                An introduction to data structures - static v
                                dynamic structures
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Static verses dynamic implementation of data
                                  structures
                                </strong>
                                <br />
                                The method used to structure data in a
                                computer's memory can be classified in one of
                                two ways, either as a static data structure or
                                as a dynamic data structure.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Static data structures
                                </strong>
                                <br />A static data structure is one whose size
                                is fixed. An example of a static data structure
                                is an array. To use an array, the programmer
                                needs to state a number of things:
                              </p>
                              <p align="center">
                                <img
                                  src="images/7f9cec87-73c0-4968-b44b-6818aa93a714a.gif"
                                  alt="array"
                                />
                                <br />
                                &nbsp;
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Give the array a name.</li>
                                    <li>
                                      Say what data type the array will hold.
                                    </li>
                                    <li>
                                      Give the size of the array, state how many
                                      data items it can hold.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                It is relatively easy (compared to dynamic data
                                structures) to write the code that sets up an
                                array. This type of structure allows fast access
                                to the data held in it because you can use
                                random access (hashing algorithms) or index
                                sequential algorithms with arrays. In addition,
                                when an array is defined, space is reserved in
                                memory for it when the program is compiled -
                                space for the data in the array will therefore
                                always be available. However,
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The size of the array is fixed before it
                                      is used. If the array has no data in it,
                                      it will still be taking up the space in
                                      memory that was allocated to it when it
                                      was compiled. This is not a very efficient
                                      use of memory.
                                    </li>
                                    <li>
                                      Sometimes, estimating the array size
                                      needed is difficult.
                                    </li>
                                    <li>
                                      Once the array is full, that is it! You
                                      can't put any more data into it.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p align="center">
                                <img
                                  src="images/a80c38e4-009a-4ca7-abe7-40172758d056b.gif"
                                  alt="pros_cons"
                                />
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Dynamic data structures
                                </strong>
                                <br />A dynamic data structure (such as linked
                                lists, stacks, queues and trees) is one whose
                                size can vary, depending upon the data storage
                                needs of the program. With these types of
                                structure, you don't need to fix the size in
                                advance. The available RAM is used very
                                efficiently because only the required space for
                                actual data in the structure is used while the
                                rest of the RAM is available for other
                                applications. However,
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      These structures are more complicated to
                                      program than arrays.
                                    </li>
                                    <li>
                                      Some structures can be slow. For example,
                                      linked lists only allow serial access not
                                      random access to data. If you had to
                                      search serially through one million
                                      records of drivers to find Zebb’s record,
                                      it would take a long time!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default An_introduction_to_data_structures___static_v_dynamic;