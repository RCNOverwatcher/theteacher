import React from "react";

function Traversal_of_trees_breadth_first() {
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
                                Traversal of trees breadth first
                              </h1>
                              <p>
                                <strong style="line-height: 1.5">
                                  Introduction
                                  <br />
                                </strong>
                                There are a number of ways that we can search
                                through a tree to find what we want. Broadly,
                                they split into two approaches, depth first and
                                breadth first. We will consider breadth first
                                here.&nbsp;
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Traversing binary trees using beadth first
                                  <br />
                                </strong>
                                Consider the following binary tree:
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/39a185f0-31b2-49b3-9520-eaeaae2951e9breadth.GIF"
                                  alt="breadth"
                                />
                              </p>
                              <p align="center">&nbsp;</p>
                              <p>
                                The element in the tree is at a certain level
                                (or depth) from the root node H. Programmers
                                like to start counting at zero, so the root is
                                at level 0. Elements C and B are at level 1. D,
                                T and N are at level 2 and element E is at level
                                3. if we want to visit the elements depth first
                                rather than using one of the depth first
                                methods, we would visit them starting at level 0
                                and going left to right, then level 1 and going
                                left to right, then level 2 going left to right
                                and finally level 3 going left to right. We
                                would visit the nodes (the elements) in this
                                order:
                              </p>
                              <p>
                                <strong>H C B D T N E</strong>
                              </p>
                              <p>
                                Why would you need beadth first traversal?
                                <br />
                                There are many situations where data is
                                organised in levels rather than in depth. If you
                                think of a school, with the Head in charge of
                                everyone. To help him, he may have two Deputy
                                Heads. The Deputy Heads will have some Senior
                                Managers to help them as part of the Senior
                                Management Team (SMT). Some of the Senior
                                Managers are the line manager for some
                                Departmental Heads. The Departmental Heads will
                                be in charge of teachers, technicians and so on.
                                We could represent this using a simple tree
                                structure:
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 0px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/15bb0c70-c54d-4d77-95f1-fc62426ffac7breadth1.GIF"
                                  alt="breadth1"
                                />
                              </p>
                              <p>
                                If we needed to know who was on the same
                                management level, we would access the tree using
                                a breadth first algorithm. This would allow us
                                to print off:
                              </p>
                              <p>
                                Headteacher
                                <br />
                                Deputy Head 1<br />
                                Deputy Head 2<br />
                                SMT 1<br />
                                SMT 2<br />
                                SMT 3<br />
                                SMT 4<br />
                                SMT 5<br />
                                SMT 6<br />
                                Depart 1<br />
                                Depart 2<br />
                                Depart 3<br />
                                Depart 4<br />
                                Depart 5<br />
                                Depart 6<br />
                                Depart 7
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Many organisations are structured in this way.
                                  A family tree is also structured like this. If
                                  you want to print off all the brothers and
                                  sisters, all the cousins, all the
                                  grandfathers, you would use breadth first to
                                  go through the tree. When games are played, a
                                  player often has a number of possible moves.
                                  Some are better than others so a breadth first
                                  approach may be appropriate in some
                                  circumstances. for example, when playing
                                  chess, you may be able to move your queen to a
                                  place where it can be taken. This is usually a
                                  bad move but do you really want to explore all
                                  the moves after having your queen taken (a
                                  feth first approach) or would it be better to
                                  explore moves that don't involve having your
                                  most important piece taken (a breadth first
                                  approach)?
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>Breadth first or depth first?</strong>
                                  <br />
                                  Breadth first traversal uses much more memory
                                  than a depth first traversal because with
                                  breadth first, you have to store all the child
                                  nodes' pointers at each level. Which one you
                                  use, however, really comes down to what data
                                  you want to find, what the purpose of your
                                  traversal or search is. If you had a family
                                  tree and you were looking for the youngest
                                  member of the family, they would be at the
                                  bottom of the tree in all likelihood. To reach
                                  the bottom with breadth first traversal,
                                  however, is going to take much longer compared
                                  to depth first traversal. On the other hand,
                                  if you wanted to find someone who died a long
                                  time ago, then breadth traversal will allow
                                  you to quickly look-up and examine all of the
                                  earliest members of the family.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>A breadth first algorithm</strong>
                                  <br />
                                  When you traverse a tree using breadth first,
                                  you start at the root node (level 0) and visit
                                  each of the root node's child nodes first (the
                                  elements in level 1) starting on the left.
                                  Then you go down a level to level 2 and
                                  starting on the left, visit each of those
                                  nodes, and continue this until there are no
                                  more nodes to visit. There are a number of
                                  ways of implementing a breadth first
                                  traversal. The simplest way is to use a queue.
                                  In queues, a new data item is added at the
                                  back of other data items already in the queue,
                                  and items in the queue are always removed from
                                  the front. We need to have a picture of this
                                  in our heads:
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/21a0028f-ee20-40f9-be94-9d0b7bf4640fqueue.GIF"
                                    alt="queue"
                                  />
                                </span>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span style="line-height: 1.5">
                                    1. Create an empty queue called Q<br />
                                    2. v = root
                                    <br />
                                    3. Visit v<br />
                                    4. Add v to Q<br />
                                    5. WHILE (Q is not empty) DO:
                                    <br />
                                    6. &nbsp; &nbsp;Take out v from Q<br />
                                    7. &nbsp; &nbsp;FOR (each child u of v)
                                    <br />
                                    8. &nbsp; &nbsp; &nbsp; &nbsp;Visit u<br />
                                    9. &nbsp; &nbsp; &nbsp; &nbsp;Add u to Q
                                    <br />
                                    10. &nbsp;END FOR
                                    <br />
                                    11. END WHILE
                                  </span>
                                </strong>
                              </p>
                              <p>
                                To see this working, you need to trace an
                                example like the one we saw at the start:
                              </p>
                              <p>
                                <img
                                  src="images/a8d56e48-7598-4e3f-962e-33c5a9bff06cbreadth.GIF"
                                  alt="breadth"
                                />
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  1. Create an empty queue called Q.
                                </strong>
                                <br />
                                <strong>2. H is the root.</strong>
                                <br />
                                <strong>3. Visit H</strong>
                                <br />
                                <strong>4. Add H to Q</strong>
                                <br />
                                <strong>5. Q is not empty = TRUE</strong>
                                <br />
                                <strong>
                                  6. &nbsp; &nbsp; Remove H from Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp;Visit C and add C to Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp;Visit B then add B to Q
                                </strong>
                                <br />
                                <strong>
                                  5. Q is not empty = TRUE &nbsp; (The queue now
                                  holds BC, with C at the front of the queue and
                                  B at the back.)
                                </strong>
                                <br />
                                <strong>
                                  6. &nbsp; &nbsp; Remove C from Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp; Visit D and add D to Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp; Visit T and add T to the
                                  Q
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = TRUE &nbsp; (The queue
                                    now holds TDB, with B at the front of the
                                    queue and T at the back.)
                                  </span>
                                  &nbsp;
                                </strong>
                                <br />
                                <strong>
                                  6. &nbsp; &nbsp; Remove B from Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp; Visit N and add N to Q
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = TRUE &nbsp; (The queue
                                    now holds NTD, with D at the front of the
                                    queue and N at the back.)
                                  </span>
                                </strong>
                                <br />
                                <strong>
                                  6. &nbsp; &nbsp; Remove D from Q
                                </strong>
                                <br />
                                <strong>
                                  8 + 9. &nbsp; &nbsp; Visit E and add E to Q
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = TRUE &nbsp; (The queue
                                    now holds ENT, with T at the front of the
                                    queue and E at the back.)
                                  </span>
                                </strong>
                                <br />
                                <strong>
                                  6. &nbsp; &nbsp; Remove T from Q
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = TRUE &nbsp; (The queue
                                    now holds EN, with N at the front of the
                                    queue and E at the back.)
                                  </span>
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    6. &nbsp; &nbsp; Remove N from Q
                                  </span>
                                </strong>
                                <br style="line-height: 16.3636360168457px" />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = TRUE &nbsp; (The queue
                                    now holds E, with E at the front of the
                                    queue and E at the back.)
                                  </span>
                                  &nbsp;
                                </strong>
                                <br />
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    6. &nbsp; &nbsp; Remove E from Q<br />
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    5. Q is not empty = FALSE (The queue is now
                                    empty, so 'not empty' is FALSE.)
                                    <br />
                                  </span>
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span style="line-height: 16.3636360168457px">
                                    END &nbsp;
                                  </span>
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

export default Traversal_of_trees_breadth_first;