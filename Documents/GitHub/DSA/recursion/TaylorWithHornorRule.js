var s = 1;
function HornorRule(n,m){
    if(m==0)return 1
    s = 1 + n/m * s
    return HornorRule(n,m-1)
}