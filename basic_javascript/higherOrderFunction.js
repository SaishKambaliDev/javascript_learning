function abcd()
{
    return function()
    {
        console.log("Hey");
    }
}

abcd()();