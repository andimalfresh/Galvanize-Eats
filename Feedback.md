This is a good start. Just need a little fixing to make it perfect.

For instenseString() you usually do not want two sections doing the same exact
 thing (both returning false). In cases where there are multiples use || and put them all in one.

You also want to make sure you are looking for '!' anywhere else in the string and return false
 if you find it. The simplest way to do this is iterate backwards, checking that the end is 3 
 exclamations, returning false if that is not the case and then continuing to the beginning 
 looking for any other exclamations, returning false if you find one, else returning true outside
  of the loop.

The indentation also needs work here. You want your if to be a set number of spaces in from your
 function, the return statement to be that set number of spaces inside of the if, and the closing 
 curly braces even with the corresponding opening statement.

mean() passes and works great, just needs some indentation work as well.

For line 2, use let rather than var.

Indent line 3 in 4 spaces like your var. Then line 4 should be in 4 from that, line 5 and 6 
should be 4 spaces in, and line 7 should not be indented at all.

Delete the semi-colon on line 4.

For median() you will want to delete all the semi-colons. The key is to be consistent across
 the board.

Use let here as well.

The indentation here is almost perfect. You want to use a consistent number of spaces for each
 level of indent. Here you have some 2 and some 4. They should be the same across all functions,
  so 4 across the board, or 2 across the board.

For mode() you are erroring out due to missing parentheses on line 7.

Remove the semi-colons.

Adjust the indentation based one the previous comments.

Use let.

The end goal is consistency for indentations, semi-colons, and let/const. Fix those 
and the functions and you will be a 3.