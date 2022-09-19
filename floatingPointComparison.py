def approx_equals(a, b):
    c = a - b
    if c < 0:
        if c >= -0.001:
            return True
        else:
            return False
    else:
        if c <= 0.001:
            return True
        else:
            return False