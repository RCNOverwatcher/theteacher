import React from "react";

function Implementing_a_queue_in_Python___using_deque() {
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
                                Implementing a queue in Python - using deque
                              </h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  Introduction
                                  <br />
                                </strong>
                                There are a number of in-built methods we could
                                use to implement a queue structure. Lists have
                                append and pop functions which we could use, for
                                example. If you add an item to the end of a
                                queue, these functions will be fast. If you
                                remove an item from the front, however, they
                                will be slow (in computing terms) because not
                                only do you have to remove the item, you have to
                                shift all of the other items along as well. In
                                Big O terms, using lists in this way is rated as
                                an O(n) operation. A much better approach would
                                be to use a library with a specific object
                                designed for fast queue manipulation. Python
                                comes with a library called collections, and in
                                there, is 'deque'. This is pronounced 'deck'
                                (not 'de-queue') and will allow us to create an
                                efficient queue data structure. Using Big O
                                notation, it improves our operations in our
                                queue to a 0(1) from the list's O(n) efficiency.
                                Deques could also be used for implementing
                                stacks, although we used a different approach
                                (writing our own functions and class) when we
                                looked at that.
                              </p>

                              <p>
                                <strong>Collections deque</strong>
                                <br />
                                Deque comes with a wide range of in-built
                                functions, including append, popleft, clear and
                                count. You can set the queue to be an umlimited
                                size, or make it a fixed size. We can also use
                                other functions such as
                                <strong>
                                  <em>len</em>
                                </strong>{" "}
                                and
                                <strong>
                                  <em>in</em>
                                </strong>
                                . You can find a summary of all of the functions
                                by searching for
                                <strong>
                                  <em>Python Collections deque</em>
                                </strong>
                                .&nbsp;
                              </p>
                              <p>Copy and paste this code into Python:</p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #deque is pronounced 'deck' and is short for
                                </strong>
                                <br />
                                <strong>
                                  #'double-ended queue'. Import deque from the
                                </strong>
                                <br />
                                <strong>#collections library.</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>from collections import deque</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #Create a queue of unlimited size. The front
                                  of the queue
                                </strong>
                                <br />
                                <strong>
                                  #is on the left. The back of the queue is on
                                  the right.
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  queue = deque(['Arsenal', 'Barnet', 'Coventry
                                  City'])
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('The items in the queue:',queue)
                                </strong>
                                <br />
                                <strong>
                                  queue.append('Newcastle United') &nbsp; &nbsp;
                                  #Add Newcastle United
                                </strong>
                                <br />
                                <strong>
                                  print('Added Newcastle United:',queue)
                                </strong>
                                <br />
                                <strong>
                                  queue.append('Southampton') &nbsp; &nbsp; #Add
                                  Southampton
                                </strong>
                                <br />
                                <strong>
                                  print('Added Southampton:',queue)
                                </strong>
                                <br />
                                <strong>
                                  queue.popleft() &nbsp; &nbsp; #Remove Arsenal
                                </strong>
                                <br />
                                <strong>print('Removed Arsenal:',queue)</strong>
                                <br />
                                <strong>
                                  temp = queue.popleft() &nbsp; &nbsp; #Remove
                                  Barnet
                                </strong>
                                <br />
                                <strong>print('Removed Barnet:',queue)</strong>
                                <br />
                                <strong>
                                  print('The last item removed was',temp){" "}
                                </strong>
                                <br />
                                <strong>queue.append('Coventry City')</strong>
                                <br />
                                <strong>queue.append('Coventry City')</strong>
                                <br />
                                <strong>
                                  print('Add Coventry City twice ....')
                                </strong>
                                <br />
                                <strong>
                                  print('The items in the queue:',queue)
                                </strong>
                                <br />
                                <strong>
                                  print('Count the instances of Coventry
                                  City',queue.count('Coventry City'))
                                </strong>
                                <br />
                                <strong>
                                  queue.clear() &nbsp; &nbsp; #Empty the queue
                                </strong>
                                <br />
                                <strong>print('Empty the queue')</strong>
                                <br />
                                <strong>
                                  print('The items in the queue:',queue)
                                </strong>
                                <br />
                                <strong>print('')</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  #The following queue can hold a maximum of
                                  three items.
                                </strong>
                                <br />
                                <strong>
                                  #If items are added when the list is full, a
                                  corresponding
                                </strong>
                                <br />
                                <strong>
                                  # number of items from the opposite end are
                                  removed.
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  queue = deque(['Arsenal', 'Barnet', 'Coventry
                                  City'],3)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('The items in the queue:',queue)
                                </strong>
                                <br />
                                <strong>
                                  print('The length of the queue is',len(queue))
                                </strong>
                                <br />
                                <strong>
                                  queue.append("Newcastle United")
                                </strong>
                                <br />
                                <strong>
                                  print('Added Newcastle United:',queue)
                                </strong>
                                <br />
                                <strong>
                                  print('The length of the queue is
                                  still',len(queue))
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>print('Remove Barnet ....')</strong>
                                <br />
                                <strong>
                                  temp = queue.popleft() &nbsp; &nbsp; #Remove
                                  Barnet
                                </strong>
                                <br />
                                <strong>
                                  print('The items in the queue:',queue)
                                </strong>
                                <br />
                                <strong>
                                  print('The last item removed was',temp){" "}
                                </strong>
                                <br />
                                <strong>
                                  print('The length of the queue is',len(queue))
                                </strong>
                              </p>
                              <p>
                                As you can see, we have imported
                                <strong>
                                  <em>deque</em>
                                </strong>{" "}
                                from
                                <strong>
                                  <em>collections</em>
                                </strong>
                                . We then tried out some of the available
                                functions in deque, carefully printing out the
                                results after each experiment and checking that
                                the queue worked in the way we expected it to.
                                We should note that when using this deque object
                                to implement a stack or a queue, the data
                                structures are not strictly enforced; it is
                                possible to do operations on the data in the
                                stack or queue in a way that is inconsistent
                                with how they should work (as a FIFO data
                                structure for queues or a LIFO data structure
                                for stacks, for example). It is up to the
                                programmer to use the range of functions in a
                                way consistent with the data structure being
                                created and used. This could be a source of
                                programming bugs, however, so care must be
                                taken!
                              </p>
                              <p>
                                <strong>
                                  Creating our own queue structure
                                </strong>
                                <br />
                                If we want to enforce a strict queue structure,
                                we would need to create our own set of functions
                                or a class in exactly the same way that we did
                                when we looked at stacks. In the following
                                implementation, we will
                                <strong>
                                  <em>
                                    assume that the back of the queue is at
                                    position 0
                                  </em>
                                </strong>
                                in the list.
                              </p>
                              <p>Copy and paste this code into Python:</p>
                              <p style="margin-left: 30px">
                                <strong>class Deque:</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; def __init__(self):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; self.items = []
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  &nbsp; &nbsp; def is_empty(self):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; return self.items
                                  == []
                                </strong>
                                <br />
                                <br />
                                <strong>
                                  &nbsp; &nbsp; def add_rear(self, item):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp;
                                  self.items.insert(0,item)
                                </strong>
                                <br />
                                <br />
                                <strong>
                                  &nbsp; &nbsp; def remove_front(self):
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; return
                                  self.items.pop()
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>&nbsp; &nbsp; def size(self):</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp; &nbsp; return
                                  len(self.items)
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>clubs = Deque()</strong>
                                <br />
                                <strong>print(clubs.is_empty())</strong>
                                <br />
                                <strong>clubs.add_rear('Arsenal')</strong>
                                <br />
                                <strong>clubs.add_rear('Birmingham')</strong>
                                <br />
                                <strong>clubs.add_rear('Cardiff')</strong>
                                <br />
                                <strong>clubs.add_rear('Derby')</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('The size of the deque is',clubs.size())
                                </strong>
                                <br />
                                <strong>
                                  print('The back of the queue
                                  is',clubs.items[0])
                                </strong>
                                <br />
                                <strong>
                                  print('The front of the queue
                                  is',clubs.items[-1])
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('Remove one item from the front of the
                                  queue (Arsenal)')
                                </strong>
                                <br />
                                <strong>clubs.remove_front()</strong>
                                <br />
                                <strong>
                                  print('The front of the queue is
                                  now',clubs.items[-1])
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  print('Add one item to the rear of the queue
                                  (Everton)')
                                </strong>
                                <br />
                                <strong>clubs.add_rear('Everton')</strong>
                                <br />
                                <strong>
                                  print('The back of the queue
                                  is',clubs.items[0])
                                </strong>
                              </p>
                              <p>
                                As you can see, we have only provided a method
                                to add an item to the back of the queue and
                                remove one from the front, in addition to some
                                methods to check if the queue is empty and to
                                get its size. This would be fine for a FIFO
                                queue, but we should note that there are other
                                types of queues - we could easily add extra
                                methods to our class if we needed to. For
                                example, we could add a method to add an item to
                                the front of the queue as well as the back, or
                                one that can remove an item from the back of the
                                queue as well as the front. We could also add a
                                method to print out the contents of the whole
                                queue.
                              </p>
                              <p>
                                <strong>Tasks</strong>
                                <br />
                                <strong>Q1.</strong> Add extra methods to the
                                class to&nbsp;add an item to the front of the
                                queue as well as the back, and one that can
                                remove an item from the back of the queue as
                                well as the front. <br />
                                <strong>Q2.</strong> Add a method to print out
                                the contents of the queue.
                                <br />
                                <strong>Q3.</strong>
                                Write a program that uses a stack to reverse the
                                items in a queue.
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

export default Implementing_a_queue_in_Python___using_deque;