import React from "react";

function An_introduction_to_trees() {
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
                                An introduction to trees
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Tree structures
                                  <br />
                                </strong>
                                Another dynamic data structure is known as a
                                ‘tree structure’. Data items are organised
                                according to some rules. Once in this structure,
                                the data can then be sorted. Suppose, for
                                example, we wanted to organise the following
                                list of fruit into a binary tree structure so
                                that they can then be sorted into alphabetical
                                order.
                              </p>
                              <p class="NormalContent" align="center">
                                <strong>
                                  mango, banana, pineapple, apple, coconut,
                                  pear, grape, strawberry, raspberry.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <strong>How would we go about this?</strong>
                              </p>
                              <p class="NormalContent">
                                <strong>Step 1:</strong> The tree doesn’t exist
                                when we want to ‘insert’ the first item, mango,
                                into the tree. The first item is therefore
                                placed at the top of the diagram. This position,
                                or node, is known as the ‘root node’.
                              </p>

                              <p class="NormalContent" align="center">
                                <img
                                  src="images/d64b2e88-961a-4b10-9ccd-6dc886069c1d1.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 2:</strong> Alphabetically, the b
                                of banana is less than the m of mango, so we
                                branch left. In binary trees, if a piece of data
                                is less than the current node, we will branch
                                left. If it is greater than the node, we will
                                branch right. (Note that we could reverse the
                                left and right branching if we wanted to. We
                                would get the same tree but as a mirror image).
                                A node will only ever have a maximum of two
                                branches underneath it in a binary tree, one
                                branching left and the other branching right.
                                (You can have trees that are not binary, but
                                that is beyond the scope of our discussion).
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/c5f1df27-a85a-41a1-85d1-cd71bf1e12d92.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 3:</strong> The p of pineapple is
                                greater than the m of mango, so we branch right.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/4c434471-6674-4a07-977a-7597548396e63.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 4:</strong> The a of apple is less
                                than m of mango so we branch left. Then it is
                                less than the b of banana so we branch left
                                again. Now there is no node in that position so
                                our new data goes in that position. Apple goes
                                under banana and to the left.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/ad655288-8960-46e7-8647-6beca916b24e4.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 5:</strong> The c of coconut is
                                less than mango so branch left. Coconut is
                                greater than banana so branch right.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/988e199b-6387-4cfd-ac6c-c8ddb5d8f1265.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 6:</strong> Pear is alphabetically
                                greater than mango, so branch right. It is less
                                than pineapple so branch left.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/e7fc4f1d-367f-4efd-831c-54371de332a86.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 7:</strong> Grape is less than
                                mango so branch left. It is greater than banana,
                                so branch right. It is greater than coconut so
                                branch right again.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/3bf8cd3c-5da3-4e10-b3f4-e80c7db3414c7.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 8:</strong> Strawberry is greater
                                than mango so branch right. It is also greater
                                than pineapple, so branch right again.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/9b4412ed-ed06-4a59-843f-17624e994c8a8.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>Step 9:</strong> Raspberry is greater
                                than mango, so branch right. It is greater than
                                pineapple, so branch right again and it is less
                                than strawberry, so now branch left.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/25a7fa60-e1aa-467e-9526-6bd60bed8f719.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                Note that mango is known as the ‘
                                <strong>root node’</strong>. The nodes with no
                                nodes underneath them are known as the ‘
                                <strong>terminal nodes’</strong>. In this case,
                                the terminal nodes are apple, grape, pear and
                                raspberry. Each node can have a maximum of two
                                nodes branching underneath it if the tree is a
                                special kind of tree called a ‘
                                <strong>binary tree’</strong>. We can formalise
                                a little more the insertion of each new data
                                item using the following pseudocode.
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Insertion algorithm
                                </strong>
                                <br />
                                To inset an item into a tree structure, we
                                follow this algorithm for each item in turn. The
                                CURRENT NODE is the position we are currently
                                at. The DATA ITEM is the new item we want to
                                insert into the tree.
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  If the tree doesn't exist yet, make the DATA
                                  ITEM = ROOT NODE and finish.
                                </strong>
                                <br />
                                <strong>Let CURRENT NODE = ROOT NODE.</strong>
                                <br />
                                <strong>
                                  Repeat until CURRENT NODE is null.
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp; If DATA ITEM is less than CURRENT
                                  NODE
                                </strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; go to the left.
                                </strong>
                                <br />
                                <strong> &nbsp; Else</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; go to the
                                  right.
                                </strong>
                                <br />
                                <strong> &nbsp; EndIf </strong>
                                <br />
                                <strong>
                                  CURRENT NODE = value of node reached so far.
                                  (Node reached so far = null if there is no
                                  node at that position).
                                </strong>
                                <br />
                                <strong>
                                  Create new node and add DATA ITEM to that
                                  position.
                                </strong>
                                <br />
                                <strong> End Repeat</strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Deletion algorithm
                                </strong>
                                <br />
                                Deleting items from a tree structure is quite
                                complicated. There are a number of ways to do
                                it. Here’s one way:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      Traverse the tree until you find the item
                                      that you want to delete.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Call that item the root node.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Copy all of the items underneath the root
                                      node to another data structure, perhaps
                                      using a stack, for example.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Delete the root node.
                                    </li>
                                    <li class="NormalContentHeading">
                                      Use the insertion algorithm to re-enter
                                      each data item in turn from the stack into
                                      the tree.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Suppose we wanted to delete 'pineapple' from the
                                fruit binary tree we used above. We find
                                pineapple, copy all the items underneath it to a
                                stack and then delete the pineapple node. The
                                tree and stack data structures would look like
                                this.
                              </p>
                              <p align="center">
                                <img
                                  src="images/36a84bcb-ca58-46d4-91c5-9eb8f4998d4d10.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p>
                                We then pop the data items from the stack and
                                use the insertion algorithm to re-enter data
                                into the tress structure. The tree will then
                                look like this.
                              </p>
                              <p align="center">
                                <img
                                  src="images/6264a624-2338-46ab-b845-9e8a1a612c6811.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Amending data
                                  <br />
                                </strong>
                                Trees are used because they maintain an order
                                between a number of data items. Amending the
                                data would result in the order of the data in
                                the tree changing. Algorithms for amending the
                                data in trees are therefore beyond the scope of
                                this course.
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

export default An_introduction_to_trees;