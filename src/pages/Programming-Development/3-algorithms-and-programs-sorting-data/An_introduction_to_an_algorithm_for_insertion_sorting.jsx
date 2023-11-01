import React from "react";

function An_introduction_to_an_algorithm_for_insertion_sorting() {
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
                                An introduction to an algorithm for insertion
                                sorting
                              </h1>

                              <p>
                                <img
                                  style="float: left"
                                  src="images/ec9b5c42-9479-43b6-a242-6922faaf82d0Insertion-sort-example.gif"
                                  alt="Insertion-sort-example"
                                />
                                Insertion sorting is a way of putting data into
                                an order. For example, consider the data items:
                              </p>
                              <p>
                                <strong>
                                  6 &nbsp; &nbsp;5 &nbsp; &nbsp;3 &nbsp; &nbsp;
                                  1 &nbsp; &nbsp; 8 &nbsp; &nbsp;7 &nbsp;
                                  &nbsp;2 &nbsp; &nbsp;4
                                </strong>
                              </p>
                              <p>
                                You can see the animation (from Wikipedia) of
                                how insertion sorting works but we have also
                                included a step-by-step description below to
                                help you understand the process.
                              </p>
                              <p>
                                We take the first data item. This is an ordered
                                list of one element.&nbsp;
                              </p>
                              <p>
                                We now have an ordered list: <strong>6</strong>.
                                We also have all the other items to the right of
                                6 in an unordered list.
                              </p>
                              <p>
                                Then we{" "}
                                <em>
                                  <strong>insert</strong>
                                </em>{" "}
                                the next element 5 in the correct place. We
                                compare 5 to the element just before it, which
                                is 6. If it is bigger than 6 or the same, we
                                leave it in its current position. If it is
                                smaller, we swap the data elements. We must swap
                                them.
                              </p>
                              <p>
                                We now have an ordered list:
                                <strong>5 &nbsp; &nbsp; 6</strong>.&nbsp;The
                                other items to the right of 6 are an unordered
                                list.
                              </p>
                              <p style="margin-top: 10px">
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 3 in the correct place.
                                We compare 3 to the element just before it,
                                which is 6. If it is bigger than 6 or the same,
                                we leave it in its current position. If it is
                                smaller, we swap the data elements. We have to
                                swap them. Then we compare again with the next
                                element, which is 5. We must swap them.
                              </p>
                              <p>
                                We now have an ordered list:
                                <strong>
                                  3 &nbsp; &nbsp;&nbsp;5 &nbsp; &nbsp; 6.
                                </strong>
                                &nbsp;We also have all the other items to the
                                right of 6 in an unordered list.
                              </p>
                              <p>
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 1 in the correct place.
                                We compare 1 to the element just before it,
                                which is 6. We have to swap them. Then we
                                compare again with the next element, which is 5.
                                We must swap them.&nbsp;Then we compare again
                                with the next element, which is 3. We must swap
                                them. There are no more elements to compare with
                                so we stop.
                              </p>
                              <p style="margin-top: 10px">
                                We now have an ordered list:
                                <strong>
                                  1 &nbsp; &nbsp;3 &nbsp; &nbsp;&nbsp;5 &nbsp;
                                  &nbsp; 6.
                                </strong>
                                &nbsp;We also have all the other items to the
                                right of 6 in an unordered list.
                              </p>
                              <p>
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 8 in the correct place.
                                We compare 8 to the element just before it,
                                which is 6. We leave them in the same position
                                and stop.
                              </p>
                              <p>
                                We now have an ordered list:
                                <strong>
                                  1 &nbsp; &nbsp;3 &nbsp; &nbsp;&nbsp;5 &nbsp;
                                  &nbsp; 6 &nbsp; &nbsp;8.
                                </strong>
                                &nbsp;We also have all the other items to the
                                right of 8 in an unordered list.
                              </p>
                              <p>
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 7 in the correct place.
                                We compare 7 to the element just before it,
                                which is 8. We have to swap them. Then we
                                compare again with the next element, which is
                                6.&nbsp;We leave them in the same position and
                                stop.
                              </p>
                              <p>
                                We now have an ordered list:&nbsp;
                                <strong>
                                  1 &nbsp; &nbsp;3 &nbsp; &nbsp;&nbsp;5 &nbsp;
                                  &nbsp; 6 &nbsp; &nbsp;7 &nbsp; &nbsp;8.
                                </strong>
                                &nbsp;We also have all the other items to the
                                right of 8 in an unordered list.
                              </p>
                              <p>
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 2 in the correct place.
                                We compare 2 to the element just before it,
                                which is 8. We have to swap them. Then we
                                compare again with the next element, which is 7.
                                We must swap them.&nbsp;Then we compare again
                                with the next element, which is 6. We must swap
                                them. Then we compare again with the next
                                element, which is 5. We must swap
                                them.&nbsp;Then we compare again with the next
                                element, which is 3. We must swap them.&nbsp;We
                                then compare 2 to 1. We leave them in the same
                                position and stop.
                              </p>
                              <p>
                                We now have an ordered list:&nbsp;
                                <strong>
                                  1 &nbsp; &nbsp;2 &nbsp; &nbsp;3 &nbsp;
                                  &nbsp;&nbsp;5 &nbsp; &nbsp; 6 &nbsp; &nbsp;7
                                  &nbsp; &nbsp;8.
                                </strong>
                                &nbsp;We also have all the other items to the
                                right of 8 in an unordered list.
                              </p>
                              <p>
                                Then we&nbsp;
                                <em>
                                  <strong>insert</strong>
                                </em>
                                &nbsp;the next element 4 in the correct place.
                                We compare 4 to the element just before it,
                                which is 8. We have to swap them. Then we
                                compare again with the next element, which is 7.
                                We must swap them.&nbsp;Then we compare again
                                with the next element, which is 6. We must swap
                                them.&nbsp;Then we compare again with the next
                                element, which is 5. We must swap
                                them.&nbsp;Then we compare again with the next
                                element, which is 3. We leave them in the same
                                position and stop completely, as there are no
                                more elements.
                              </p>
                              <p>
                                Our final sorted list is this:
                                <strong>
                                  1 &nbsp; &nbsp;2 &nbsp; &nbsp;3 &nbsp; &nbsp;4
                                  &nbsp; &nbsp;5 &nbsp; &nbsp;6 &nbsp; &nbsp;7
                                  &nbsp; &nbsp;8
                                </strong>
                              </p>
                              <p>
                                We now have a description, an algorithm, of the
                                solution to sorting data using the insertion
                                sort method. It would be useful to convert this
                                into pseudo-code. We can then give it to any
                                programmer to convert into a real program using
                                the language they are skilled in.
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

export default An_introduction_to_an_algorithm_for_insertion_sorting;
