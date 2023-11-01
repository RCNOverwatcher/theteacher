import React from "react";

function Convert_between_reverse_Polish_and_infix() {
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
                                Converting between reverse Polish notation and
                                infix notation
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Converting between reverse polish and infix
                                  notations
                                </strong>
                                <br />
                                We have already said that a stack is a LIFO
                                device and we know that stacks are used to
                                evaluate expressions. We can diagrams of the
                                stack to help us convert between reverse Polish
                                notation and infix notation.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Example 1
                                  </span>
                                </strong>
                                <br />
                                Consider the algebraic expression:
                                <span class="NormalContentHeading">
                                  4(A + B){" "}
                                </span>
                              </p>
                              <p class="NormalContent">
                                This uses the infix notation. Converting it to
                                reverse Polish notation gives
                                <span class="NormalContentHeading">4AB+*</span>
                              </p>
                              <p class="NormalContent">
                                How can I check this is correct? I fill the
                                stack with operands, as I see them. So 4 goes in
                                first, followed by A, followed by B. I then get
                                to the first operand. The rule is as follows:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContentHeading">
                                      Remove the two top items from the stack
                                    </li>
                                    <li class="NormalContentHeading">
                                      Do the expression given by the operand
                                    </li>
                                    <li class="NormalContentHeading">
                                      Return the result to the stack.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                So I remove B and A, add them together and put
                                the result back in the stack. (Note that A + B
                                is the same as B + A). I then get to the
                                multiply symbol. I remove the top two items in
                                the stack. Multiply them and return the result
                                to the stack. (Note that (A + B) * 4 is the same
                                as 4 * (A + B) which is also the same as 4(A +
                                B).
                              </p>
                              <p align="center">
                                <img
                                  src="images/4b203373-44d4-41ec-aade-55ee56c0bbb9a.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                So my reverse Polish notation algebraic
                                expression
                                <span class="NormalContentHeading">
                                  4AB+*
                                </span>{" "}
                                does indeed have the equivalent infix algebraic
                                expression of
                                <span class="NormalContentHeading">
                                  4(A + B) .
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Example 2
                                  </span>
                                </strong>
                                <br />
                                Consider this sum:
                                <span class="NormalContentHeading">
                                  &nbsp;(3 * (6 + 2) - 4) / (3 + 7)
                                </span>
                              </p>
                              <p class="NormalContent">
                                This uses infix notation and the answer is
                                <span class="NormalContentHeading">2 .</span>
                              </p>
                              <p class="NormalContent">
                                Using reverse Polish notation, the sum we need
                                to do becomes:
                                <span class="NormalContentHeading">
                                  <strong>
                                    <em>3 6 2 + * 4 - 3 7 + /</em> &nbsp;
                                  </strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                ..... or does it? How can we check?
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/bfc6b048-a575-44e6-8301-fad8aad88ecfb.gif"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The operand 3 goes into the stack first,
                                      followed by 6 then 2. (Putting operands
                                      onto the stack is known as 'pushing'
                                      operands. Removing them is known as
                                      'popping' operands.) We then meet the
                                      operator 'add' so we remove the top two
                                      items from the stack, the 2 and then the
                                      6, add them to get 8 and push this back
                                      onto the stack.
                                    </li>
                                    <li class="NormalContent">
                                      We then get the 'multiply' operator. We
                                      pop the top two items from the stack, the
                                      8 and the 3 and multiply them to get 24.
                                      This is pushed back onto the stack.
                                    </li>
                                    <li class="NormalContent">
                                      We then push the 4 onto the stack. We see
                                      the 'minus' operator next so we pop the
                                      top two items from the stack, the 4
                                      followed by the 24 and subtract the 4 from
                                      the 24 to get 20. This is pushed onto the
                                      stack.
                                    </li>
                                    <li class="NormalContent">
                                      We then push 3 onto the stack, followed by
                                      7. We then see the 'addition' operator. We
                                      pop the top two items from the stack, the
                                      7 followed by the 3 and add them to get
                                      10. This is pushed onto the stack.
                                    </li>
                                    <li>
                                      <span class="NormalContent">
                                        We then meet the 'division' operator. We
                                        pop the top two items from the stack,
                                        the 10 followed by the 20 and divide 10
                                        into 20 to get 2. This is pushed onto
                                        the stack.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                We have the same answer using reverse Polish
                                notation as we got using infix notation and can
                                therefore conclude that both expressions are
                                equivalent.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Using binary trees to convert between infix
                                    notation and reverse Polish notation
                                  </span>
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  So far, we have simply confirmed whether a
                                  reverse Polish notation expression is the same
                                  as an infix expression. However, we can use
                                  binary trees to easily convert between the
                                  two.
                                </span>
                              </p>
                              <p class="NormalContent">
                                Consider the example just done:
                                <span class="ContentHeading">
                                  &nbsp;(
                                  <strong class="NormalContentHeading">
                                    <em>3 * (6 + 2) - 4) / (3 + 7)</em>
                                  </strong>
                                </span>
                              </p>
                              <p class="NormalContent">
                                The binary tree for this is as follows:
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/9611c62a-969d-4234-9cdf-bb15bcea20cdc.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                If we wanted to get the infix notation from a
                                binary tree, we would follow this algorithm,
                                which is known as 'in-order':
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                1) Traverse the left sub-tree
                                <br />
                                2) Visit the root
                                <br />
                                3) Traverse the right sub-tree
                              </p>
                              <p class="NormalContent">
                                This would give us:
                                <strong class="NormalContentHeading">
                                  <em>&nbsp;(3 * (6 + 2) - 4) / (3 + 7)</em>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                If we wanted to get the reverse Polish notation
                                from the same binary tree, we would follow this
                                algorithm, known as 'post-order':
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                1) Traverse the left sub-tree
                                <br />
                                2) Traverse the right sub-tree
                                <br />
                                3) Visit the root
                              </p>
                              <p class="NormalContent">
                                This would give us:
                                <span class="NormalContentHeading">
                                  <strong>
                                    <em>3 6 2 + * 4 - 3 7 + /</em>
                                  </strong>
                                  &nbsp;&nbsp;
                                </span>
                              </p>
                              <p class="NormalContent">
                                By the way, we could also get Polish notation
                                from the binary tree, by traversing the tree in
                                pre-order using this algorithm:
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                1) Visit the root
                                <br />
                                2) Traverse the left sub-tree
                                <br />
                                3) Traverse the right sub-tree
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    How does in-order and post-order traversing
                                    work?
                                  </span>
                                </strong>
                                <br />
                                Traversing trees requires you to understand and
                                use recursion. You can read more about recursion
                                <a>here</a>.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/362ce7ca-2c43-4135-bc93-c6c13aae764ed.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Traversing a tree: IN-ORDER
                                </strong>
                                <br />
                                Using this method, we must visit the tree in
                                this order:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the root node.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the right sub-tree.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                How does this work? We visit the
                                <strong>left sub-tree</strong>, then the
                                <strong>node</strong>, then the
                                <strong>right sub-tree</strong>.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      We start at the root, node A.
                                    </li>
                                    <li class="NormalContent">
                                      Underneath node A is the left sub-tree
                                      (with root node B) and the right sub-tree
                                      (with root node C).
                                    </li>
                                    <li class="NormalContent">
                                      We must check the left sub-tree first
                                      according to our INORDER rules. Move to B.
                                    </li>
                                    <li class="NormalContent">
                                      But B has a left sub-tree (with a root at
                                      D) and a right sub-tree (with a root at
                                      E).
                                    </li>
                                    <li class="NormalContent">
                                      We must check the left sub-tree first
                                      according to our INORDER rules. Move to D.
                                    </li>
                                    <li class="NormalContent">
                                      D does not have a left sub-tree, so visit
                                      the node D.
                                    </li>
                                    <li class="NormalContent">
                                      Now check for D&rsquo;s right sub-tree. It
                                      doesn&rsquo;t have one.
                                    </li>
                                    <li class="NormalContent">
                                      We have now done the left sub-tree for the
                                      tree that has a root node at B. Now visit
                                      node B.
                                    </li>
                                    <li class="NormalContent">
                                      Now visit the right sub-tree of B. We move
                                      to E.
                                    </li>
                                    <li class="NormalContent">
                                      E doesn&rsquo;t have a left sub-tree so
                                      visit E.
                                    </li>
                                    <li class="NormalContent">
                                      E doesn&rsquo;t have a right sub-tree so
                                      move to B and because we have now
                                      completely visited the tree with the root
                                      node at B, we move up to node A. Visit
                                      node A.
                                    </li>
                                    <li class="NormalContent">
                                      Now visit the right sub-tree of A. We move
                                      to C.
                                    </li>
                                    <li class="NormalContent">
                                      C doesn&rsquo;t have a left sub-tree so
                                      visit C.
                                    </li>
                                    <li class="NormalContent">
                                      C doesn&rsquo;t have a right sub-tree so
                                      move back up to A.
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        We have now visited every node.
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span class="NormalContent">
                                  The order that we visited the nodes was
                                  <strong>DBEAC. </strong>We can write an
                                  algorithm to print out all of the data at the
                                  nodes, like this:
                                </span>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        For the current node, check if there is
                                        a left sub-tree. If there is, go to the
                                        root node for this sub-tree and then go
                                        to 2). If there isn&rsquo;t, go to 3).
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        Repeat 1).
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        Print the current node.
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        For the current node, check whether it
                                        has a right sub-tree. If it has go to 5)
                                        else go to 6).
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">
                                        Repeat 1).
                                      </span>
                                    </li>
                                    <li class="NormalContent">
                                      <span class="NormalContent">END</span>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                This algorithm will take a little bit of
                                thinking about because it is a
                                <strong>recursive algorithm</strong>.
                              </p>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/82b0cb37-c464-4245-9f1e-414623b7bb6ee.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Traversing a tree: PRE-ORDER
                                  </span>
                                </strong>
                                <br />
                                Using this method, we need to
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      Visit the root node.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the right sub-tree.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                Using our previous binary tree, we would visit
                                the nodes in the order:{" "}
                                <strong>A B D E C</strong>. We can write an
                                algorithm that would print out all of the data
                                at the nodes, like this:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      Print the current node.
                                    </li>
                                    <li class="NormalContent">
                                      For the current node, check if there is a
                                      left sub-tree. If there is, go to the root
                                      node for this sub-tree and then go to 1).
                                      If there isn&rsquo;t, go to 3).
                                    </li>
                                    <li class="NormalContent">
                                      For the current node, check whether it has
                                      a right sub-tree. If it has go to 4) else
                                      go to 5).
                                    </li>
                                    <li class="NormalContent">Repeat 1).</li>
                                    <li class="NormalContent">END.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent" align="center">
                                <img
                                  src="images/7c9846f5-24bd-4e44-92d0-e696ec8dc441f.gif"
                                  alt
                                />
                              </p>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Traversing a tree: POST-ORDER
                                </strong>
                                <br />
                                Using this method, we need to
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      Visit the left sub-tree.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the right sub-tree.
                                    </li>
                                    <li class="NormalContent">
                                      Visit the root node.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p class="NormalContent">
                                Using our example binary tree, the order that we
                                would visit is:
                                <span class="NormalContentHeading">
                                  D E B C A
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

export default Convert_between_reverse_Polish_and_infix;