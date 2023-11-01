import React from "react";

function Local_and_global_variables__scope_and_Python() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Local and global variables, scope and Python
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                  <span class="NormalContentHeading">
                                    <br />
                                  </span>
                                </strong>
                                <span class="NormalContentHeading">
                                  When we use a variable in a programming
                                  language, we need to understand something
                                  called
                                  <strong>
                                    <em>scope</em>
                                  </strong>
                                  , and whether the variable we are using is
                                  <strong>
                                    <em>local</em>
                                  </strong>{" "}
                                  or
                                  <strong>
                                    <em>global</em>
                                  </strong>
                                  . If a programmer doesn't understand the idea
                                  of scope, they will sooner or later either get
                                  an error message popping up or they will get a
                                  logic error in their code. A logic error is
                                  where the code runs and 'works' but produces
                                  an unexpected result. These are often the
                                  hardest type of errors to track down so it is
                                  a much better idea to understand scope than
                                  trying to deal with problems that are caused
                                  by a lack of understanding of this concept.
                                </span>
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <img
                                    style="margin: 20px; float: left"
                                    src="images/7c5c266e-c485-4aa4-ae70-f63c080959ccscope1.GIF"
                                    alt="scope1"
                                  />
                                  Local variables
                                </strong>
                                <br />
                                In Python, local variables are any variables
                                which are changed or created
                                <strong>
                                  <em>anywhere</em>
                                  <em>&nbsp;</em>
                                  <em>inside</em>{" "}
                                </strong>
                                a function. The variable is
                                <em>
                                  <strong>only</strong>{" "}
                                </em>
                                available inside that function. A program cannot
                                access local variables outside of the function.
                                A program cannot use the values held in local
                                variables outside of the function. Indeed, the
                                moment the program flow leaves a function, the
                                local variables inside the function actually
                                disappear completely, never to be seen again!
                              </p>
                              <p class="NormalContent">
                                <strong>Global variables</strong>
                                <br />
                                Global variables in Python are created and used
                                somewhere in the main program but
                                <strong>
                                  <em>outside</em>{" "}
                                </strong>
                                of all functions. These variables can be used
                                and modified outside of all functions but
                                importantly, they can also be used and modified
                                in all functions as well.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Turning a local variable into a global
                                  variable
                                </strong>
                                <br />
                                Sometimes, we want to turn a local variable into
                                a global variable and we will see this in action
                                in an example later. We can do this in python
                                using the keyword{" "}
                                <em>
                                  <strong>global</strong>
                                </em>
                                .
                              </p>
                              <p class="NormalContent">
                                <strong>Scope</strong>
                                <br />
                                We use the term
                                <em>
                                  <strong>scope</strong>
                                </em>{" "}
                                when talking about whether variables are local
                                or global. We talk about the{" "}
                                <strong>
                                  <em>scope of the variable</em>
                                </strong>
                                . This means we want to know whether a variable
                                is only available inside a particular function,
                                or whether it is available in the main program
                                and all of the functions as well.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Should a programmer use local or global
                                  variables?
                                </strong>
                                <br />
                                Generally speaking, programmers should avoid
                                using global variables wherever possible.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      If we write a function, and we want to put
                                      it in a library to use in other programs,
                                      it is almost impossible to do if we use
                                      global variables in it. This is because
                                      any program we use the function in in the
                                      future will need to have exactly the same
                                      global variables in it as the original
                                      program, and they will have to be used in
                                      exactly the same way.
                                    </li>
                                    <li class="NormalContent">
                                      Using global variables makes it much
                                      harder to track down bugs.
                                    </li>
                                    <li class="NormalContent">
                                      We want to write code using self-contained
                                      blocks of code wherever possible, not code
                                      that has sub-routines or functions, which
                                      have to go and collect global values from
                                      the main program all the time.
                                    </li>
                                    <li class="NormalContent">
                                      Another issue with global variables is
                                      that they always exist in memory. Local
                                      variables disappear as soon as you leave a
                                      function and the memory they used is
                                      returned to the main area so it can be
                                      used for other things. Programs always
                                      have to keep global variables and that
                                      means programs that require more memory
                                      than ones that used local variables.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                <strong>
                                  Some examples to illustrate local and global
                                  variables and the scope of a variable
                                  <br />
                                </strong>
                                The first thing to show is that local variables
                                cannot be accessed outside of the function that
                                it was created in. Type in the following code
                                and run it.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def scope():</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; message = "Peter Rabbit"
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>scope()</strong>
                                <br />
                                <strong>print (message)</strong>
                              </p>
                              <p class="NormalContent">
                                When you ran the code, the program called the
                                function 'scope'. The variable called 'message'
                                was assigned the value 'Peter Rabbit'. We know
                                that if you create or modify a variable
                                <strong>
                                  <em>anywhere inside</em>
                                </strong>{" "}
                                a function, it becomes a local variable. This
                                local variable was then printed out and the
                                function exited. We are now back in the global
                                scope of the program. The last line of the
                                function tries to print the contents of the
                                variable 'message' but an error message is
                                generated. This is because when we exited the
                                function, all local variables that were inside
                                that function disappeared. The program cannot
                                find a variable called 'message' so tells you
                                that it isn't defined.
                              </p>
                              <p class="NormalContent">
                                Modify your program so that it looks like the
                                following program:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def scope(): </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>message = "Peter Rabbit"</strong>
                                <br />
                                <strong>scope()</strong>
                              </p>
                              <p class="NormalContent">
                                All scope does in this program is to print
                                whatever the variable 'message' holds. When you
                                enter the function, is the variable local or
                                global? The answer to this lies in what we said
                                earlier, that in Python, if you create or change
                                a variable
                                <strong>
                                  <em>anywhere inside</em>
                                </strong>{" "}
                                a function, then it becomes a local variable. We
                                haven't created or changed the variable inside
                                the function. We have only used the variable
                                inside the function. We are therefore using the
                                global variable called 'message'.
                              </p>
                              <p class="NormalContent">
                                Let's change the program to this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def scope(): </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; message = "Lily Bobtail"
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>message = "Peter Rabbit"</strong>
                                <br />
                                <strong>scope()</strong>
                                <br />
                                <strong>print (message)</strong>
                              </p>
                              <p class="NormalContent">
                                When we run this code, what happens now? We set
                                our variable to hold 'Peter Rabbit' in the main
                                program so this is a global variable. Then we
                                called the function. When we entered the
                                function, however, the first thing we did was to
                                set a variable called 'message' to hold 'Lily
                                Bobtail'. According to what we said earlier, if
                                we create or change a variable
                                <strong>
                                  <em>anywhere inside</em>
                                </strong>{" "}
                                a function, it becomes a local variable. We also
                                said that when you leave the function, all local
                                variables in that function disappear! So what
                                should get printed out? Try it and see. You
                                should see that 'Lily Bobtail' gets printed
                                first. When the function exits, all local
                                variables in that function disappear. The
                                program then gets to the last line of the
                                program and we print 'Peter Rabbit'. The local
                                variable called 'message' was a completely
                                different variable to the global variable called
                                'message' even though they had the same name!
                              </p>
                              <p class="NormalContent">
                                Now let's try and print the global variable and
                                the local variable from the function. Modify
                                your code to this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def scope(): </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; message = "Lily Bobtail"
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>message = "Peter Rabbit"</strong>
                                <br />
                                <strong>scope()</strong>
                              </p>
                              <p class="NormalContent">
                                What we have done is to set a global variable
                                called 'message' to hold 'Peter Rabbit'. Then we
                                called the function. The first thing we did in
                                the function was to try and print the variable's
                                contents. Then we tried to change the variable
                                so it holds 'Lily Bobtail'. Finally, we tried to
                                print the contents of the variable again. What
                                do you think would happen now? Run the code and
                                see. You should see that you get an error
                                message, telling you that you are trying to use
                                a variable before referencing it. What is
                                happening here?
                              </p>
                              <p class="NormalContent">
                                When the variable was set in the main program to
                                'Peter Rabbit', it was a global variable. When
                                we called the function, the first thing we tried
                                to do in the first line was to print the
                                variable. But there is a problem! According to
                                what we have said a few times now, if we try to
                                create or change a variable{" "}
                                <strong>
                                  <em>anywhere inside</em>
                                </strong>{" "}
                                a function, it becomes a local variable. So when
                                we changed the variable to 'Lily Bobtail' later
                                on in the function, that meant that the variable
                                'message' inside the function was local. Now,
                                even though we did this{" "}
                                <em>
                                  <strong>after</strong>{" "}
                                </em>
                                the first line in the function, the first line
                                is a problem because we are now trying to use a
                                local variable
                                <strong>
                                  <em>before</em>{" "}
                                </strong>
                                we have actually created it. That's why an error
                                message pops up, telling us that we are trying
                                to reference a variable before assigning it.
                              </p>
                              <p class="NormalContent">
                                If we want Python to use a global variable, we
                                have to explicitedly tell it to using the
                                keyword
                                <strong>
                                  <em>global</em>
                                </strong>
                                . Modify your code to this and then try to
                                predict what will get printed out before running
                                it, to see if your prediction was correct.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>def scope(): </strong>
                                <br />
                                <strong>&nbsp; &nbsp; global message</strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; message = "Lily Bobtail"
                                </strong>
                                <br />
                                <strong>&nbsp; &nbsp; print (message)</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>message = "Peter Rabbit"</strong>
                                <br />
                                <strong>scope()</strong>
                                <br />
                                <strong>print (message)</strong>
                              </p>
                              <p class="NormalContent">
                                So now, we set the variable to hold 'Peter
                                Rabbit'. We then called the function and told
                                the function to use the global variable
                                'message'. It doesn't matter that later on in
                                the function, we change the value that this
                                variable holds - it doesn't ever become a local
                                variable in the function now because we told the
                                function it will always be global at the start
                                of the function, by using the keyword
                                <em>
                                  <strong>global</strong>
                                </em>
                                . So now, 'Peter Rabbit' gets printed, then the
                                global variable is changed to 'Lily Bobtail'.
                                Then we print out the variable again, which
                                prints 'Lily Bobtail' and exit the function. The
                                last line of the program says print out the
                                variable again, which of course is global and
                                still holds 'Lily Bobtail' now.
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

export default Local_and_global_variables__scope_and_Python;